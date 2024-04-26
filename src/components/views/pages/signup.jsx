import google from "../../../assets/icon/Goog.png";
import info from "../../../assets/icon/info_pr.png";
import no_network from "../../../assets/icon/network.png";
import Checkmark from "../../../assets/icon/Checkmark.png";
import errorImg from "../../../assets/icon/error.png";
import profile from "../../../assets/icon/user.png";
import server from "../../../assets/icon/server.png";

import { InputTextFeild } from "../../widget/textfeild";
import { useEffect, useState} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { ConditionModalPrimaryBtn} from "../../widget/modals";
import axios from "axios";
import { UploadProfile } from "../../widget/button";


const SignUp = ({routeToLogin, accountRole}) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const[profileUser, setProfileUser] = useState(null);

  
  const [otpNotice, setOtpNotice] = useState("");
  const [otp, setOtp] = useState();
  const [inputOtp, setInputOtp] = useState();


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [switchModal, setSwitchModal] = useState(0);


  useEffect(() => {
    AOS.init({duration: 2000});
})




  const handleProfileUpdload = (e) => 
  {
    console.log("The image is ");
    const file = e.target.files[0];

    if(file)
    {
      const reader = new FileReader();

      reader.onload = (e) =>
      {
        setProfileUser(e.target.result)
        console.log("The image is "+profileUser);
      }

      reader.readAsDataURL(file);
    }
    
  }

/// Send the verification code to the email .......................

  const handleSignIn = async () => {

      try{
        setLoading(true);

        const response = await axios.post('http://localhost:4000/user/otp', {email: email});
        setError(false);
        setErrorMessage("");
        console.log('The API response is :', response.data);
        var data = response.data;
        console.log("The otp is "+ data.otp);
        setOtp(data.otp);
      } catch (err)
      {
        setError(true);
        const errorData = err.response.data;
        console.log(err);
        if(errorData.message === undefined)
        {
          console.log("The status is ", errorData.message);
          return setErrorMessage("");
        } else {
          console.log("The status is ", errorData.message);
          return setErrorMessage(errorData.message);
        }
      } finally {
        setLoading(false);
      }
  
      }
  

// Verify the entered OTP.......................................

  const verifyOtp = async (e) => 
  {
    e.preventDefault();
    
    if(error == true)
    {
      handleSignIn();
    } else if(error == false)
    {
      if(switchModal == 1)
      {
          console.log("The otp is "+ inputOtp);
          if(inputOtp == otp)
          {
            console.log('They are similar');
            setOtpNotice("");
            setLoading(true);
            setTimeout(() => {
              setSwitchModal(2);
              setLoading(false);
            }, 3000)

          } else if(inputOtp == "")
          {
            console.log('Empty value');
            setOtpNotice("Empty feild");

          }else{
            console.log('They are not similar');
            setOtpNotice("Invalide Code");
          }
      }else if(switchModal == 2)
      {
        try {
          console.log("The image is : ", profileUser);
          setLoading(true);
          const response = await axios.post('http://localhost:4000/user/signIn', {email: email, userName: userName, profile: profileUser, accountRole: accountRole});
          setError(false);
          console.log("The data is ", response);
          localStorage.setItem("userData", JSON.stringify(response.data));
          setSwitchModal(3);
          /// ........................................
        } catch(err)
        {
          setError(true);
          const errorData = err.response.data;
          console.log("Semothing went wrong : ", err);
          if(errorData.message === undefined)
          {
            console.log("The status is ", errorData.message);
            return setErrorMessage("");
          } else {
            console.log("The status is ", errorData.message);
            return setErrorMessage(errorData.message);
          }

        } finally {
          setTimeout(() => {
            setLoading(false);
          }, 3000)
        }
      }
    }
  }

// handle the on change event ...............................
const handleEmailInput = (e) =>
{
  const {value} = e.target;
  setSwitchModal(1);
  setEmail(value);
  setInputOtp('');
  setUserName('');
  setProfileUser(null)
}



  const customStyle = 
  {
    textAlign: 'center',
  }

  const otpModal = 
  (
    <div className="text-center py-2">
      {loading == true ? (<div><div className="loader"></div><br /><p>Please wait...</p></div>) :
       error == true ? (<div className=""><img src={errorMessage === "" ?  no_network : errorMessage === "SERVER_ERROR" ? server : errorImg } className="imgFluid"/> <p className="text-highline">{errorMessage == "DUPLICATE_EMAIL" ? "Email is already in use. Please choose a different email address." : errorMessage == "INVALID_EMAIL" ? "Invalid Email Format: Please enter a valid email address." : errorMessage == "EMPTY_EMAIL" ? "Please enter your email address." : errorMessage == "SERVER_ERROR" ? "We're experiencing technical difficulties at the moment. Please try again later." : "Please check your internet connection" }</p></div>) : 
       (switchModal == 1 ? 
       (<div className="">
       <p>Enter the 6-digit verification code that was send to your email.</p>
       <div className="">
         <InputTextFeild type="number" placeholder="Enter six digit code" style={customStyle} value={inputOtp} onChange={(e) => setInputOtp(e.target.value)} idStyle="numberInput"/>
         <p className="text-danger fw-bold">{otpNotice}</p>
         <div className="mt-3"><a type="button" onClick={handleSignIn} className="link-highline">Re-send the verification code</a></div>
       </div>
       </div>)
       
       : switchModal == 2 ?  
       (<div>
       <p>You're almost there !! Enter your user name, then click the button below to finish signing</p>
       <div className="mb-3 d-flex justify-content-center">
        <UploadProfile src={profileUser != null ? profileUser : profile} onChange={handleProfileUpdload} />
       </div>
        <InputTextFeild placeholder="User name" style={customStyle} value={userName} onChange={(e) => setUserName(e.target.value)}/>
         <p className="text-danger fw-bold">{otpNotice}</p>
       </div>)
        : (<div><img src={Checkmark} className="imgFluid"/> <p className="text-highline">Congratulations you have sign In</p></div>))
       }
    </div>
  );




    return ( 
            <div className="" >
                  <div className="" >
                    <div className="container title py-5">
                      <h2 className="text-highline">Hey there !</h2>
                      <p>Ease into your dream property with our solution.</p>
                      <div className="col-9">
                        <button className="btn py-2 google-btn">
                          <img src={google} className="img-fluid google-img" />
                          <label className="">Signin with Google</label>
                        </button>
                      </div>
                        <div className="row">
                          <div className="col"><hr /></div>
                          <div className="col col-1 text-center"><small>or</small></div>
                          <div className="col"><hr /></div>
                        </div>
                      <form action="">
                        <InputTextFeild type="email" placeholder="Enter your email" value={email} onChange={handleEmailInput} />
                        <small className="text-highline"><img src={info} className="img-fluid mx-1" style={{ height: 'auto', width: '20px'}}/>A verification code will be send via this email</small>
                        <div className="mt-2" >
                          <ConditionModalPrimaryBtn
                            dbTarget="sigInModal"
                            disabled={!emailRegex.test(email)}
                            modalBtn="Verify"
                            onClick={switchModal === 1 ? handleSignIn : null}  
                            href={switchModal === 1 || switchModal === 2 ? "" : "/properties"}
                            modalContent={otpModal} 
                            headerClass={loading == true ? "modal-header d-none" : "modal-header"} 
                            footerClass={loading == true || errorMessage != "" ? "modal-footer d-none" : "modal-footer" } 
                            modalHeading={error == true ? (errorMessage === ""  ? "No network" : errorMessage === "SERVER_ERROR" ? "Server Error" : "Error") : switchModal == 2 ? "User name" : switchModal == 3 ? "Done" : "Check your email"} 
                            actionBtn={error == true ? "Try again" : switchModal == 2 ? "Register" : switchModal == 3 ? "Continue" : "Verify code"} 
                            footerOnClick={switchModal === 1 || switchModal === 2 ? verifyOtp : null} 
                            style={{
                            backgroundColor: !emailRegex.test(email) ? '#999999' : '#2B6777',
                            cursor: !emailRegex.test(email) ? "no-drop": "pointer" ,
                            color: '#ffffff',
                          }} 
                          />
                        </div>
                      </form>
                        <div className="py-2">
                          <small className="">Already have an account ? <a href="" className="link-highline" onClick={routeToLogin}> Login</a></small>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default SignUp;
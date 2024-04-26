import relax from "../../../assets/relax.png";
import logo from "../../../assets/icon/logo.png";
import google from "../../../assets/icon/Goog.png";
import { InputTextFeild } from "../../widget/textfeild";
import { ConditionModalPrimaryBtn} from "../../widget/modals";
import info from "../../../assets/icon/info_dr.png";
import server from "../../../assets/icon/server.png";
import no_network from "../../../assets/icon/network.png";
import errorImg from "../../../assets/icon/error.png";



import { useState } from "react";
import axios from "axios";


import 'aos/dist/aos.css';
const Login = ({routetoSignIn}) => {


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [userName, setuserName] = useState('');

  const handleLogin = async (e) =>
  {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post('http://localhost:4000/user/logIn', {email: email});
      console.log("The data is ", response);
      setError(false);
      localStorage.setItem("userData", JSON.stringify(response.data));
      setuserName(response.data.users.userName);
    }catch(err)
  {
    setError(true);
    const errorData = err.response.data;
    console.log("Semothing went wrong : ", err);
    if(errorData.message === "" ||errorData.message === undefined)
    {
      console.log("The status is ", errorData.message);
      return setErrorMessage("");
    } else {
      console.log("The status is ", errorData.message);
      return setErrorMessage(errorData.message);
    }
  } finally
  {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }
  } 


  const openModal = 
  (
    <div className="text-center py-3">
      {loading == true ? (<div><div className="loader"></div><br /><p>Please wait...</p></div>) :
      error == true ? 
      (<div className="">
        <img src={errorMessage === "" ?  no_network : errorMessage === "SERVER_ERROR" ? server : errorImg } className="imgFluid"/> <p className="text-highline">{errorMessage == "INVALID_EMAIL" ? "Invalid Email : Please enter a valide email" : errorMessage == "EMPTY_EMAIL" ? "Please enter your email address." : errorMessage == "SERVER_ERROR" ? "We're experiencing technical difficulties at the moment. Please try again later." : "Please check your internet connection" }</p></div>) :
      (<div>
          <h4 className="text-highline">Happy to see you back !!</h4>
          <div className="mt-3">
            {userName && (<p className="fs-5">{userName}</p>)}
          </div>
      </div>)
      }
    </div>
  );

    return ( 
        <div>
              <div className="container title py-5">
                  <h2 className="text-highline">Welcome back !</h2>
                  <p>Resume your research journey with ease using our solution.</p>
                  <div className="col-9">
                    <button className="btn py-2 google-btn">
                      <img src={google} className="img-fluid google-img" />
                      Sign In with Google
                    </button>
                  </div>
                    <div className="row">
                      <div className="col"><hr /></div>
                      <div className="col col-1 text-center"><small>or</small></div>
                      <div className="col"><hr /></div>
                    </div>
                  <form action="">
                    <InputTextFeild type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {/* {errorMessage && (<small className="text-error"><img src={info} className="img-fluid mx-1" style={{ height: 'auto', width: '20px'}}/>{errorMessage === "INVALID_EMAIL" ? "Invalide email" : "Poor network. Please check your connection"}</small>)} */}
                    <div className="mt-2">
                    <ConditionModalPrimaryBtn
                            dbTarget="logInModal"
                            disabled={!emailRegex.test(email)}
                            modalBtn="Login"
                            onClick={handleLogin}
                            modalContent={openModal} 
                            headerClass={loading == true ? "modal-header d-none" : "modal-header"} 
                            footerClass={loading == true || errorMessage != "" ? "modal-footer d-none" : "modal-footer" } 
                            modalHeading={error == true ? (errorMessage === ""  ? "No network" : errorMessage === "SERVER_ERROR" ? "Server Error" : "Error")  : "Done"} 
                            actionBtn={error == true ? "Try again" : "Yes it's me"} 
                            footerOnClick={error == true ? handleLogin : null} 
                            href={error == true ? "" : "/"}
                            style={{
                            backgroundColor: !emailRegex.test(email) ? '#999999' : '#2B6777',
                            cursor: !emailRegex.test(email) ? "no-drop": "pointer" ,
                            color: '#ffffff',
                          }} 
                          />
                    </div>
                  </form>
                    <div className="py-2">
                        <small>Don't have an account ? <a href="" className="link-highline" onClick={routetoSignIn}> Sign In</a></small>
                    </div>
                </div>
        </div>
     );
}
 
export default Login;
import relax from "../../../assets/relax.png";
import logo from "../../../assets/icon/logo.png";
import { useEffect, useState } from "react";
import client from "../../../assets/client.png";
import owner from "../../../assets/owner.png";
import { LinkPrimaryButton } from "../../widget/button";
import SignUp from "./signup";
import Login from "./login";
import AOS from "aos";
import 'aos/dist/aos.css';
import info from "../../../assets/icon/info_pr.png";


const Auth = ({page, subPage, routeToLogin, routetoSignIn}) => {
    
    const [accountRole, setAccoutRole] = useState("");

    const moveToClientSignIn = (e) =>
    {
        e.preventDefault();
        setAccoutRole("client");
        routetoSignIn();
    }

    const moveToOwnerSigIn = (e) =>
    {
        e.preventDefault();
        setAccoutRole("owner");
        routetoSignIn();    
    }

  useEffect(() =>
  {
      AOS.init({duration: 2000});
  })


    return ( 
        <section>
           {page == 1 ? (
            <div className="container">
            <div className="text-center py-2">
                <h1 className="text-highline">Sing Up to Rentopia</h1>
            </div>
            <div className=" p-3 text-center">
                <div className="row">
                    <div className="col py-3" id="left-divider">
                        <img src={client} className="img-fluid findImg" />
                        <h3 className="text-highline">As a client</h3>
                        <p className="px-5 text-secondary">Find your dream home effortlessly. Sign up now to browse our exclusive real estate listings !</p>
                        <LinkPrimaryButton children="Let's Go" style={{textDecoration : "none"}} onclick={moveToClientSignIn}/>
                    </div>
                    <div className="col py-3">
                        <img src={owner} className="img-fluid findImg" />
                        <h3 className="text-highline">As an owner</h3>
                        <p className="px-5 text-secondary">Unlock the potential of your property. Sign up now to showcase your listings effectively!</p>
                        <LinkPrimaryButton children="Let's Go" style={{textDecoration : "none"}} onclick={moveToOwnerSigIn}/>

                    </div>
                </div>
            </div>
            <div className="text-center py-1">
                <small className="">Already have an account ? <br /><a href="" className="link-highline" onClick={routeToLogin}> Login</a></small>
            </div>
        </div>
           ) : (
            <div className="centered-div container px-5">
                <div className="container px-5 row">
                    <a href="/" className="mx-5">
                        <img src={logo} className="img-fluid logo-img"/>
                    </a>
                    <div className="col-12 col-lg mx-4">
                        {subPage === 1 ? (<SignUp routeToLogin={routeToLogin} accountRole={accountRole} />) : (<Login routetoSignIn={routetoSignIn} />)}
                    </div>

                    <div className="col d-none d-lg-block">
                        <img src={relax} className="img-fluid" data-aos="fade-left"/>
                  </div>

                </div>
                <div className="mt-2">
                    <small className="d-flex justify-content-center mt-5">Powered by <span className="link-highline fw-bold mx-1">CHRONOS</span></small>
                </div>
            </div>
           )}
            <div className="mx-5 col-4" id="notification">
                <div class="alert alert-green alert-dismissible fade show" role="alert" >
                    <img src={info} className="img-fluid col-1 px-1" /><strong> Info</strong> This page is not responsive yet !! (Web view only)
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </section>
     );
}
 
export default Auth;
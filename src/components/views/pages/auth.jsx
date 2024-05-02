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


const Auth = ({page, subPage, routeToLogin, routetoSignIn, translation}) => {
    
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
                <h1 className="text-highline mt-lg-0 mt-5">{translation.authTitle}</h1>
            </div>
            <div className=" p-3 text-center">
                <div className="row">
                    <div className="col col-lg-6 col-12 py-3" id="left-divider">
                        <img src={client} className="img-fluid findImg" />
                        <h3 className="text-highline">{translation.authClientTitle}</h3>
                        <p className="px-5 text-secondary">{translation.authClientDescription}</p>
                        <LinkPrimaryButton children={translation.authBtn} style={{textDecoration : "none"}} onclick={moveToClientSignIn}/>
                    </div>
                    <div className="col py-3">
                        <img src={owner} className="img-fluid findImg" />
                        <h3 className="text-highline">{translation.authOwnerTitle}</h3>
                        <p className="px-5 text-secondary">{translation.authOwnerDescription}</p>
                        <LinkPrimaryButton children={translation.authBtn} style={{textDecoration : "none"}} onclick={moveToOwnerSigIn}/>

                    </div>
                </div>
            </div>
            <div className="text-center py-1">
                <small className="">{translation.authLogNotice}<br /><a href="" className="link-highline" onClick={routeToLogin}>{translation.authLogbtn}</a></small>
            </div>
        </div>
           ) : (
            <div className="centered-div container px-lg-5 px-1">
                <div className="container px-lg-5 px-0 row">
                    <a href="/" className="mx-lg-5 mx-2">
                        <img src={logo} className="img-fluid logo-img"/>
                    </a>
                    <div className="col-12 col-lg mx-lg-4 mx-0">
                        {subPage === 1 ? (<SignUp routeToLogin={routeToLogin} accountRole={accountRole} translation={translation} />) : (<Login routetoSignIn={routetoSignIn} translation={translation} />)}
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
        </section>
     );
}
 
export default Auth;
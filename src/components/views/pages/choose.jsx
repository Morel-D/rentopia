import client from "../../../assets/client.png";
import owner from "../../../assets/owner.png";
import { LinkPrimaryButton } from "../../widget/button";
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";


const Choose  = () => {

    const navigate = useNavigate();


    const movetoSignIn = (e) =>
    {
        e.preventDefault();
        localStorage.setItem("routeAuth", 1);
        // setPage(1);
        navigate('/signup');
    }

    const moveToLogin = (e) =>
    {
        e.preventDefault();
        // setPage(2);
        localStorage.setItem("routeAuth", 2);
        navigate('/signup');

    }

    return ( 
        <section>
            <div className="text-center py-2">
                <h1 className="text-highline">SingIn to Rentopia</h1>
            </div>
            <div className=" p-3 text-center">
                <div className="row">
                    <div className="col py-3" id="left-divider">
                        <img src={client} className="img-fluid findImg" />
                        <h3 className="text-highline">As a client</h3>
                        <p className="px-5 text-secondary">Whether you have an apartment or a party room available for rent, Rentopia is here to assist you in showcasing your property and attracting prospective tenants.</p>
                        <LinkPrimaryButton children="Let's Go" style={{textDecoration : "none"}} onclick={movetoSignIn}/>
                    </div>
                    <div className="col py-3">
                        <img src={owner} className="img-fluid findImg" />
                        <h3 className="text-highline">As an owner</h3>
                        <p className="px-5 text-secondary">Rentopia simplifies selling property, attracting customers. Relax as our advanced algorithm handles the rest. Challenges ? We've got you covered.</p>
                        <LinkPrimaryButton children="Let's Go" style={{textDecoration : "none"}} onclick={movetoSignIn}/>

                    </div>
                </div>
            </div>
            <div className="text-center py-1">
                <small className="">Already have an account ? <br /><a className="link-highline" onClick={moveToLogin}> Login</a></small>
            </div>
        </section>
     );
}
 
export default Choose ;
import { Link } from "react-router-dom";
import maintenance from "../../../assets/maintenance.png";
import { LinkPrimaryButton, } from "../../widget/button";

const About = () => {
    return ( 
        <section className=" text-center">
            <img src={maintenance} className="img-fluid saleImg" />
            <h1 className="fw-bold text-highline mt-3">Oops !! site under maintenance</h1>
            <p>Sorry for the inconvenience, we're almost done.</p>
            <div className="mt-2 mb-5">
                <LinkPrimaryButton link="/">Turn Home</LinkPrimaryButton>
            </div>
            <br />
            <br />
            <br />
        </section>
     );
}
 
export default About;
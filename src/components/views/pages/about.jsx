import { Link } from "react-router-dom";
import maintenance from "../../../assets/maintenance.png";
import { LinkPrimaryButton, } from "../../widget/button";

const About = ({translation}) => {
    return ( 
        <section className=" text-center">
            <img src={maintenance} className="img-fluid saleImg" />
            <h1 className="fw-bold text-highline mt-3">{translation.maintainTitle}</h1>
            <p>{translation.maintainDescription}</p>
            <div className="mt-2 mb-5">
                <LinkPrimaryButton link="/">{translation.maintainBtn}</LinkPrimaryButton>
            </div>
            <br />
            <br />
            <br />
        </section>
     );
}
 
export default About;
import maintenance from "../../assets/404.png";
import { LinkPrimaryButton, } from "../widget/button";

const NotFound = ({translation}) => {
    return ( 
        <section className="text-center" id="notFound">
        <img src={maintenance} className="img-fluid saleImg" />
        <h1 className="fw-bold text-highline mt-2">{translation.notFoundTitle}</h1>
        <p>{translation.notFoundDescription}</p>
        <div className="mt-1 mb-5">
            <LinkPrimaryButton link="/">{translation.notFoundBtn}</LinkPrimaryButton>
        </div>
    </section>
     );
}
 
export default NotFound;
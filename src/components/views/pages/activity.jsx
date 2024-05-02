import sale from "../../../assets/sale.png";
import rent from "../../../assets/rent.png";


import { LinkPrimaryButton } from "../../widget/button";

const Activity = ({translation}) => {


    return ( 
        <section className="d-flex justify-content-center mb-5">
            <div className="container px-1 px-lg-5">
                <div className=" p-3 text-center">
                    <div className="row">
                        <div className="col col-12 col-lg-6 py-3" id="left-divider">
                            <img src={rent} className="img-fluid findImg" />
                            <h3 className="text-highline">{translation.activityLeftSideTitle}</h3>
                            <p className="px-5 text-secondary">{translation.activityLeftSideDescription}</p>
                            {/* <LinkPrimaryButton>Rent my property</LinkPrimaryButton> */}
                        </div>
                        <div className="col py-3">
                            <img src={sale} className="img-fluid findImg" />
                            <h3 className="text-highline">{translation.activityRightSideTitle}</h3>
                            <p className="px-5 text-secondary">{translation.activityRightSideDescription}</p>
                        </div>
                    </div>
                </div>
                <div className="text-center py-5">
                <LinkPrimaryButton link="/add">{translation.activityActionBtn}</LinkPrimaryButton>
                </div>
            </div>
        </section>
     );
}
 
export default Activity;
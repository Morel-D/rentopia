import sale from "../../../assets/sale.png";
import rent from "../../../assets/rent.png";
import info from "../../../assets/icon/info_pr.png";


import { LinkPrimaryButton } from "../../widget/button";
import { SuccessMessage } from "../../widget/message";
import { LoadingModal, ModalPrimaryBtn } from "../../widget/modals";

import Rent from "./rent";

const Activity = () => {


    return ( 
        <section className="d-flex justify-content-center mb-5">
            <div className="container px-5">
                <div className=" p-3 text-center">
                    <div className="row">
                        <div className="col py-3" id="left-divider">
                            <img src={rent} className="img-fluid findImg" />
                            <h3 className="text-highline">Rent a property</h3>
                            <p className="px-5 text-secondary">Whether you have an apartment or a party room available for rent, Rentopia is here to assist you in showcasing your property and attracting prospective tenants.</p>
                            {/* <LinkPrimaryButton>Rent my property</LinkPrimaryButton> */}
                        </div>
                        <div className="col py-3">
                            <img src={sale} className="img-fluid findImg" />
                            <h3 className="text-highline">Sell a property</h3>
                            <p className="px-5 text-secondary">Rentopia simplifies selling property, attracting customers. Relax as our advanced algorithm handles the rest. Challenges ? We've got you covered.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center py-5">
                <LinkPrimaryButton link="/add">Let's go</LinkPrimaryButton>
                </div>
            </div>
            <div className="mx-5 col-4" id="notification">
                <div class="alert alert-green alert-dismissible fade show" role="alert" >
                    <img src={info} className="img-fluid col-1 px-1" /><strong> Info</strong> This page is not responsive yet !! (Web view only)
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </section>
     );
}
 
export default Activity;
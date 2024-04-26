import whiteLogo2 from "../../../assets/icon/logo3.png"
import { OutLineWhiteButton } from "../../widget/button";
import insta from "../../../assets/icon/insta.png"
import linkein from "../../../assets/icon/linke.png"
import facebook from "../../../assets/icon/facebook.png"

const Footer = () => {
    return ( 
        <div className="container-fluid footer-bg">
            <div className="container py-5">
                <br />
                <br />
                <div className="row">
                    <div className="col col-12 col-lg-5 mb-4">
                       <a class="navbar-brand" href="" style={{ "color": "#2B6777" }}>
							<div className="row">
								<div className="col text-start"> <img src={whiteLogo2} className="img-fluid logo-img2" /> </div>
								{/* <div className="col col-2 text-start  mt-2"><h3 className="text-white">Rentopia</h3></div> */}
							</div>
						</a>
                        <p className="mt-2 lightText">We prioritize digital accessibility, value feedback, and welcome accommodation requests. Contact us for assistance.</p>
                        <hr className="text-white" />
                        <div className="row">
                            <div className="col col-4"><OutLineWhiteButton className="text-white py-2 col-12">About us</OutLineWhiteButton></div>
                            <div className="col text-start d-flex gap-1">
                                <a className="btn"><img src={insta} className="img-fluid social-img" /></a>
                                <a className="btn"><img src={linkein} className="img-fluid social-img" /></a>
                                <a className="btn"><img src={facebook} className="img-fluid social-img" /></a>
                            </div>
                        </div>
                          
                    </div>
                    <div className="col text-center text-lg-start py-2">
                        <h3 className="text-white mx-3">Find Property</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><a href="" className="text-secondary">Apartments</a></li>
                            <li class="list-group-item"><a href="" className="text-secondary">Commercial building</a></li>
                            <li class="list-group-item"><a href="" className="text-secondary">Single-family home</a></li>
                            <li class="list-group-item"><a href="" className="text-secondary">Retail store</a></li>
                        </ul>
                    </div>
                    <div className="col text-center text-lg-start py-2">
                        <h3 className="text-white mx-3">Functionalities</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><a href="" className="text-secondary">Buy a property</a></li>
                            <li class="list-group-item"><a href="/rent" className="text-secondary">Rent a propery</a></li>
                            <li class="list-group-item"><a href="" className="text-secondary">Sell a property</a></li>
                        </ul>
                    </div>
                    <div className="col  text-center text-lg-start py-2">
                        <h3 className="text-white mx-3">About Us</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><a href="/about" className="text-secondary">Company Info</a></li>
                            <li class="list-group-item"><a href="" className="text-secondary">Term of service</a></li>
                            <li class="list-group-item"><a href="" className="text-secondary">Privacy Notice</a></li>
                            <li class="list-group-item"><a href="" className="text-secondary">Blog</a></li>
                        </ul>
                    </div>
                </div>
                <br />
                <hr />
                <div className="row">
                    <div className="col text-end">
                    ©2024 Rentopia — Powered by <label className="active-one">CHRONOS</label>
                    </div>
                </div>
                {/* <hr /> 4© */}
            </div>
        </div>
     );
}
 
export default Footer;
import whiteLogo2 from "../../../assets/icon/logo3.png"
import { OutLineWhiteButton } from "../../widget/button";
import insta from "../../../assets/icon/insta.png"
import linkein from "../../../assets/icon/linke.png"
import facebook from "../../../assets/icon/facebook.png"

const Footer = ({translation}) => {
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
                        <p className="mt-2 lightText">{translation.footerFirstColonDescription}</p>
                        <hr className="text-white" />
                        <div className="row">
                            <div className="col col-4"><OutLineWhiteButton className="text-white py-2 col-12">{translation.footerFirstColonAbout}</OutLineWhiteButton></div>
                            <div className="col text-start d-flex gap-1">
                                <a className="btn"><img src={insta} className="img-fluid social-img" /></a>
                                <a className="btn"><img src={linkein} className="img-fluid social-img" /></a>
                                <a className="btn"><img src={facebook} className="img-fluid social-img" /></a>
                            </div>
                        </div>
                          
                    </div>
                    <div className="col text-start py-2">
                        <h3 className="text-white mx-1">{translation.footerSecondSectionTitle}</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><a href="/" className="text-secondary">{translation.footerSecondSectionOption1}</a></li>
                            <li class="list-group-item"><a href="/" className="text-secondary">{translation.footerSecondSectionOption2}</a></li>
                            <li class="list-group-item"><a href="/" className="text-secondary">{translation.footerSecondSectionOption3}</a></li>
                            <li class="list-group-item"><a href="/" className="text-secondary">{translation.footerSecondSectionOption4}</a></li>
                        </ul>
                    </div>
                    <div className="col  text-start py-2">
                        <h3 className="text-white mx-3">{translation.footerThirdSectionTitle}</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><a href="/" className="text-secondary">{translation.footerThirdSectionOption1}</a></li>
                            <li class="list-group-item"><a href="/rent" className="text-secondary">{translation.footerThirdSectionOption2}</a></li>
                            <li class="list-group-item"><a href="" className="text-secondary">{translation.footerThirdSectionOption3}</a></li>
                        </ul>
                    </div>
                    <div className="col  text-start py-2">
                        <h3 className="text-white mx-3">{translation.footerFourthSectionTitle}</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><a href="/about" className="text-secondary">{translation.footerFourthSectionOption1}</a></li>
                            <li class="list-group-item"><a href="/" className="text-secondary">{translation.footerFourthSectionOption2}</a></li>
                            <li class="list-group-item"><a href="/" className="text-secondary">{translation.footerFourthSectionOption3}</a></li>
                            <li class="list-group-item"><a href="/" className="text-secondary">{translation.footerFourthSectionOption4}</a></li>
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
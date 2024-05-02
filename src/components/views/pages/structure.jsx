import { useEffect } from "react";
import Platform from "../../../assets/platform.png";
import { colors } from "../../tools/colors";
import { LinkPrimaryButton, OutLineWhiteButton } from "../../widget/button";
import AOS from "aos";
import 'aos/dist/aos.css';

const Structure = ({translation}) => {

    useEffect(() =>
    {
        AOS.init({duration: 2000})
    })

    return ( 
        <section className="mt-5">
            <section className="section-one container mb-5">
                <div className="row">
                    <div className="col order-2 order-lg-1">
                            <br className="br" />

                        <p className="text-highline text-start mt-lg-0 mt-4">{translation.soltionSectionOneTitle1}</p>
                        <h1 data-aos="fade-right"  className="text-dark"><b>{translation.soltionSectionOneTitle2}</b></h1>
                        <p data-aos="fade-up">{translation.soltionSectionOneDescription}</p>
                            <div data-aos="fade-up" className="col col-lg-8">
                             <LinkPrimaryButton children={translation.soltionSectionOneBtn} />
                            </div>
                    </div>
                    <div className="col col-lg-6 col-12 partten-bg order-1 order-lg-2">
                        <img data-aos="fade-up" src={Platform} className="img-fluid" />
                    </div>
                </div>
            </section>
            <section className="scetion-two mt-5 container-fluid py-lg-0">
                <div className="row">
                    <div className="col" id="visitorsBg">
                    </div>
                    <div className="col col-12 col-lg-6 py-lg-5">
                        <div className="content p-lg-5 mt-5">
                            <h1 data-aos="fade-right" className="text-dark"><b>{translation.soltionSectionTwoTitle2}</b></h1>
                            <p data-aos="fade-right">{translation.soltionSectionTwoDescription}</p>
                                <div className="col col-lg-8" data-aos="fade-up">
                                <LinkPrimaryButton children={translation.soltionSectionTwoBtn} />
                                </div>
                        </div>
                    </div>
                </div> 
                <div className="row  py-5 py-lg-0">
                    <div className="col col-12 col-lg-6 order-2 order-lg-1 mt-5">
                        <div className="content p-lg-5 mt-4">
                            <h1 className="text-dark" data-aos="fade-right"><b>{translation.soltionSectionThreeTitle2}</b></h1>
                            <p data-aos="fade-right">{translation.soltionSectionThreeDescription}</p>
                                <div className="col col-lg-8" data-aos="fade-up">
                                <LinkPrimaryButton children={translation.soltionSectionThreeBtn} />
                                </div>
                        </div>
                    </div>
                    <div className="col  order-1 order-lg-2" id="agnetBg"></div>
                </div> 
            </section>
            <section className="third-section p-3 p-lg-0" style={{backgroundColor: `${colors.darkColor}`}}>
                <div className="py-5 text-center">
                    <h1 className="text-white mt-5" data-aos="fade-up"><b>{translation.soltionSectionThreeTitle2}</b></h1>
                    <p className="text-white mt-3" data-aos="fade-up">{translation.soltionSectionFourDescription1}<br />{translation.soltionSectionFourDescription2} <br />{translation.soltionSectionFourDescription3}<br />{translation.soltionSectionFourDescription4}<br />{translation.soltionSectionFourDescription5}</p>
                     <div data-aos="fade-up">
                        <OutLineWhiteButton children={translation.soltionSectionFourBtn} className="text-white py-2 col-lg-2 col-6" />  
                     </div>
                     <div className="mt-5">
                        <br />
                        <hr className="d-lg-block d-none" />
                     </div>
                </div>
            </section>
        </section>
     );
}
 
export default Structure;
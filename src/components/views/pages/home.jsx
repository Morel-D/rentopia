import buy from "../../../assets/buy_2.png";
import buy2 from "../../../assets/buy.png";
import real from "../../../assets/real.png";
import sale from "../../../assets/sale.png";
import guy from "../../../assets/guy.jpg";
import time from "../../../assets/time.png";
import choice from "../../../assets/choice.png";
import stream from "../../../assets/stream.png";



import { LoadingModal, ModalWidget } from "../../widget/modals";
import { LinkPrimaryButton, PrimaryButton } from "../../widget/button";
import { searchProperty } from "../modules/modalContent";
import { GroupInput } from "../../widget/textfeild";
import { useEffect, useRef } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Home = ({translation}) => {

    useEffect(() => {
        AOS.init({duration: 2000});
    })

    return ( 
        <section className="">
            <div className="container-fluid">

                {/* Introduction part */}

                <div className="container">
                    <div className="row">
                        <div className="col partten-bg" data-aos="fade-in">
                            <br className="br" />
                            <br className="br" />
                            <br className="br" />

                            <p className="text-highline">{translation.homeFirstSectionTitle1}</p>
                            <div className="conatiner-fluid rect-intro"><h1 className="text-dark mx-4"  data-aos="fade-left"><b>{translation.homeFirstSectionTitle2}</b></h1></div>
                            <br />
                           <p  data-aos="fade-up">{translation.homeFirstSectionContent}</p>
                           {/* <ModalWidget modalBtn="Find a property" modalHeading="Search Location" modalContent={searchProperty} actionBtn="Search" /> */}
                           <div className="col col-lg-8"  data-aos="fade-up">
                           <GroupInput placeholder={translation.homeFirstSectionInputPlaceholder} children={translation.homeFirstSectionbtn} />
                           </div>
                           <br />
                        </div>
                        <div className="col text-center img-display" data-aos="fade-left"><img src={buy} className="img-fluid saleImg" /></div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
                {/* body part  */}

            <div className="conatianer-fluid py-5 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-lg-6 text-center py-5" id="bg-partten">
                            <img src={guy} className="img-fluid guyImg"/>
                        </div>

                        <div className="col text-end mx-4">
                            <p className="text-highline text-start">{translation.homeSecondSectionTitle1}</p>
                            <div className="conatiner-fluid text-start" data-aos="fade-left"><h1 className="text-dark"><b>{translation.homeSecondSectionTitle2}</b></h1></div>
                            <br className="br" />
                            <div className="text-start">
                                <p data-aos="fade-left">{translation.homeSecondSectionContent1} <label className="text-highline">{translation.homeSecondSectionContent2}</label> {translation.homeSecondSectionContent3}<label className="text-highline"> {translation.homeSecondSectionContent4}, 
                                </label> {translation.homeSecondSectionContent5} <label className="text-highline">{translation.homeSecondSectionContent6}</label>, {translation.homeSecondSectionContent7}</p>
                            </div>
                        </div>

                    </div>
                    {/* <hr />/ */}
                    <div className="row d-flex justify-content-center py-1 py-lg-5 px-5">
                        <div className="col text-center" data-aos="fade-up" data-aos-duration="1000">
                            <img src={time} className="img-fluid logoWiget"/>
                            <h5 className="text-highline ">{translation.homeSecondSectionCard1}</h5>
                        </div>
                        <div className="col text-center" data-aos="fade-up" data-aos-duration="2000">
                            <img src={choice} className="img-fluid logoWiget"/>
                            <h5 className="text-highline">{translation.homeSecondSectionCard2}</h5>                            
                        </div>
                        <div className="col text-center" data-aos="fade-up" data-aos-duration="3000">
                            <img src={stream} className="img-fluid logoWiget" />
                            <h5 className="text-highline">{translation.homeSecondSectionCard3}</h5>                            
                        </div>
                    </div>
                </div> 
            </div>    



            <div className="conatiner-fluid py-5">
                <br /><br />
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <p className="text-highline text-start">{translation.homeThirdSectionTitle1}</p>
                        <div className="conatiner-fluid text-start"><h1 className="text-dark"><b> {translation.homeThirdSectionTitle2}</b></h1></div>
                        <div className="text-start">
                                <p>{translation.homeThirdSectionContent1} <br />
                                {translation.homeThirdSectionContent2}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-sm-12 col-lg-4">
                            <div class="card my-3" data-aos="fade-up" data-aos-duration="1000">
                            <div class="card-body text-center">
                                <div className="text-center"><img src={buy2} className="img-fluid findImg" /></div>
                                <h5 class="card-title"><b>{translation.homeThirdSectionCardTitle1}</b></h5>
                                <p class="card-text">{translation.homeThirdSectionCardContent1}</p>
                                <PrimaryButton>{translation.homeThirdSectionCardbtn1}</PrimaryButton>
                                <br />
                                <br />
                            </div>
                            </div>
                        </div>

                        <div class="col-sm-12 col-lg-4">
                            <div class="card my-3" data-aos="fade-up" data-aos-duration="2000">
                            <div class="card-body text-center">
                                <div className="text-center"><img src={real} className="img-fluid findImg" /></div>
                                <h5 class="card-title"><b>{translation.homeThirdSectionCardTitle2}</b></h5>
                                <p class="card-text">{translation.homeThirdSectionCardContent2}</p>
                                <LinkPrimaryButton link="/rent">{translation.homeThirdSectionCardbtn3}</LinkPrimaryButton>
                                <br />
                                <br />
                            </div>
                            </div>
                        </div>


                        <div class="col-sm-12 col-lg-4">
                            <div class="card my-3" data-aos="fade-up" data-aos-duration="3000">
                            <div class="card-body text-center">
                                <div className="text-center"><img src={sale} className="img-fluid findImg" /></div>
                                <h5 class="card-title"><b>{translation.homeThirdSectionCardTitle3}</b></h5>
                                <p class="card-text">{translation.homeThirdSectionCardContent3}</p>
                                <PrimaryButton>{translation.homeThirdSectionCardbtn3}</PrimaryButton>
                                <br />
                                <br />
                            </div>
                            </div>
                        </div>


                    </div>
                </div>
                <br />
                {/* <br /> */}
            </div>


        </section>
     );
}
 
export default Home;
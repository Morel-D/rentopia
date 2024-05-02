import buy from "../../../assets/buy_2.png";
import buy2 from "../../../assets/buy.png";
import real from "../../../assets/real.png";
import sale from "../../../assets/sale.png";
import guy from "../../../assets/guy.jpg";
import time from "../../../assets/time.png";
import choice from "../../../assets/choice.png";
import stream from "../../../assets/stream.png";

import residence from "../../../assets/residence.png";
import commercial from "../../../assets/commercial.png";
import purpose from "../../../assets/purpose.png";
import luxury from "../../../assets/luxury.png";
import industry from "../../../assets/industry.png";



import downArrow from "../../../assets/icon/down_arrow.png";
import upArrow from "../../../assets/icon/up_arrow.png";



import { LinkPrimaryButton, PrimaryButton } from "../../widget/button";
import { GroupInput } from "../../widget/textfeild";
import { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const Home = ({translation}) => {

    const [drop, setDrop] = useState({});
    const [boxHeight, setBoxHeight] = useState(window.innerWidth < 450 ? "220px" : "250px")

    useEffect(() => {
        AOS.init({duration: 2000});

        const handleResize = () => {
            setBoxHeight(window.innerWidth < 450 ? "200px" : "250px");
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    const properties =
    [
        {
            id: 1,
            image: residence,
            title: translation.homeResidenceProperties,
            types: 
            [
                 translation.homeResidencePropertiesOption1,
                 translation.homeResidencePropertiesOption2,
                 translation.homeResidencePropertiesOption3,
                 translation.homeResidencePropertiesOption4,
                 translation.homeResidencePropertiesOption5,
                 translation.homeResidencePropertiesOption6

            ]
        },
        {
            id: 2,
            image: commercial,
            title: translation.homeCommercialProperties,
            types: 
            [
               translation.homeCommercialPropertiesOption1, 
               translation.homeCommercialPropertiesOption2, 
               translation.homeCommercialPropertiesOption3, 
               translation.homeCommercialPropertiesOption4, 
               translation.homeCommercialPropertiesOption5, 
               translation.homeCommercialPropertiesOption6, 
               translation.homeCommercialPropertiesOption7, 

            ]
        },
        {
            id: 3,
            image: purpose,
            title: translation.homeSpecialProperties,
            types: 
            [
                translation.homeSpecialPropertiesOption1,
                translation.homeSpecialPropertiesOption2,
                translation.homeSpecialPropertiesOption3,
                translation.homeSpecialPropertiesOption4,
                translation.homeSpecialPropertiesOption5,
                translation.homeSpecialPropertiesOption6,

            ]
        },
        {
            id: 4,
            image: luxury,
            title: translation.homeLuxuryProperties,
            types: 
            [
                translation.homeLuxuryPropertiesOption1,
                translation.homeLuxuryPropertiesOption2,
                translation.homeLuxuryPropertiesOption3,
                translation.homeLuxuryPropertiesOption4,

            ]
        },
        {
            id: 5,
            image: industry,
            title: translation.homeIndustrialProperties,
            types: 
            [
                translation.homeIndustrialPropertiesOption1,
                translation.homeIndustrialPropertiesOption2,
                translation.homeIndustrialPropertiesOption3,
                translation.homeIndustrialPropertiesOption4,
            ]
        }
    ]

    const handleDropDown = (propertyId) =>
    {
        setDrop(prevDrop => ({
            ...prevDrop,
            [propertyId] : !prevDrop[propertyId]
        }));
    }

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

                            <p className="text-highline text-start">{translation.homeFirstSectionTitle1}</p>
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

            <div className="container-fluid py-5 bg-white">
                <div className="container">
                    <p className="text-highline text-start">{translation.homePropertyTitle}</p>
                    <div className="conatiner-fluid mb-5"><h1 className="text-dark"  data-aos="fade-left"><b>{translation.homePropertyDescription}</b></h1></div>
                    <div className="row row-cols-lg-5 row-cols-2" data-aos="fade-up">
                         {
                            properties.map((property) => (
                                <div className="col py-2" key={property.id}>
                                    <div class="shadow-sm p-3 bg-body rounded" id="propertyBox" style={drop[property.id] ?  null : {height: boxHeight}}>
                                        <img src={property.image} className="img-fluid px-lg-5 px-4 mt-lg-0 mt-3" />
                                        <p className="text-dark text-center fw-bold">{property.title}</p>
                                        <div className={drop[property.id] ? "dropdowm text-center" : "dropdowm d-none text-center" }>
                                            {property.types.map((type) =>
                                        (
                                            <p><a href="#" className="text-secondary" style={{textDecoration: "none"}}>{type}</a></p>
                                        ))}

                                        </div>
                                        <div className="text-center">
                                            <button id="arrowBtn" onClick={() => handleDropDown(property.id)}><img src={drop[property.id] ?  upArrow : downArrow} className="img-fluid" style={{height: "auto", width: "40px"}} /></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                         }
                    </div>
                </div>
            </div>

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
                    <div className="row d-flex justify-content-center py-1 py-lg-5 px-3">
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



            <div className="container-fluid py-5">
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
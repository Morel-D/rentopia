import { colors } from "../../tools/colors";
import serviceBg from "../../../assets/City.png";
import info from "../../../assets/icon/info_pr.png";
import { serviceSection } from "../../json/servicePage";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Services = ({translation}) => {

    useEffect(() =>
{
    AOS.init({duration: 2000});
})

    return ( 
        <section className="">
            <section className="container-fluid"  style={{ backgroundColor: `${colors.primaryColor}` }}>
                <div className="row container px-4 mx-1">
                    <div className="col col-6 mx-5 px-4 mt-5">
                        <p className="text-highline-white">{translation.serviceFirstSectionTitle1}</p>
                        <h1 className="text-white"  data-aos="fade-left"><b>{translation.serviceFirstSectionTitle2}</b></h1>
                        <p className="text-white" data-aos="fade-up">{translation.serviceFirstSectionContent}</p>
                    </div>
                    <div className="col">
                        <br /><br />
                        <img src={serviceBg} data-aos="fade-in" className="img-fluid mt-5 mx-4" />
                    </div>
                </div>
            </section>

            <section className="container py-5">
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {
                        serviceSection(translation={translation}).map((service) =>
                    (
                        <div className="col">
                            <div className="card p-4" data-aos="fade-up" data-aos-duration={service.duration} key={service.id} style={{height: "350px"}}>
                                <img src={service.image} className="img-fluid service-icon" />
                                <h5 class="card-title py-2"><b>{service.title}</b></h5>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </section>
            <div className="mx-5 col-4" id="notification">
                <div class="alert alert-green alert-dismissible fade show" role="alert" >
                    <img src={info} className="img-fluid col-1 px-1" /><strong> Info</strong> This page is not responsive yet !! (Web view only)
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </section>
     );
}
 
export default Services;
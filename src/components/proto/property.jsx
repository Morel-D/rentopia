import rent1 from "../../../assets/property/rent1.jpg"
import rent3 from "../../../assets/property/rent3.jpg"
import location from "../../../assets/icon/Location.png"
import room from "../../../assets/icon/room.png"
import property from "../../../assets/icon/building.png"
import saves from "../../../assets/icon/save.png"
import save_fill from "../../../assets/icon/save_fill.png"
import info from "../../../assets/icon/info_pr.png";


import { PrimaryButton, SecondaryButton } from "../../widget/button"
import { useState } from "react"
import { InputTextFeild, ModalInput, SelectInput } from "../../widget/textfeild"
import { ModalSecondaryBtn } from "../../widget/modals"




const Properties = () => {

    let properties = [
        {label: "Select a property"},
        {label: "One"},
        {label: "two"},
        {label: "three"},
    ];

    let type = [
        {label: "Select type"},
        {label: "Rent"},
        {label: "Buy"},,
    ];

    let properties2 = [
        {label: "Sort by"},
        {label: "One"},
        {label: "two"},
        {label: "three"},
    ];

    const priceContent =
    (
        <div className="">
            <div className="text-white px-4 py-2">Price Range</div>
            <div className="bg-white px-4 py-2">
                <div className="row py-3">
                    <div className="col col-5"><InputTextFeild type="text" placeholder="Min price" /></div>
                    <div className="col text-center mt-2">-</div>
                    <div className="col col-5"><InputTextFeild type="text" placeholder="Max price" /></div>
                </div>
                <div className="py-2 text-center">
                    <PrimaryButton>Apply</PrimaryButton>
                </div>
            </div>
        </div>
    );

    const [save, setSave] = useState(false);


    // save the 
    const handleCheck = (e) => 
    {
        e.preventDefault();
        setSave(!save);
        console.log("The value is "+save);
    }


    return ( 
        <div className="rent">

            <section className="first-section container">
                <div className="row">
                    <div className="col py-4">
                        <h3 className="text-highline">Explore our diverse range of rentals </h3>
                        {/* <hr /> */}
                        <div className="items py-5" id="col-auth">
                        <p className="fs-5"><img src={property} alt="" className="img-fluid social-img" /> Appartment</p>
                        <p className="fs-5"><img src={location} alt="" className="img-fluid social-img" /> Terminus Mimboman | Yaounde</p>
                        <p className="fs-5"><img src={room} alt="" className="img-fluid social-img" /> 4 Rooms</p>
                        <span className="badge">2 bedroom</span>
                        <span className="badge">1 Kitchen</span>
                        <span className="badge">1 Living room</span>
                        <p className="fs-5 text-highline">23,000 FCFA / Month</p>
                        <div className="row">
                            <div className="col col-4"><PrimaryButton>Contact owner</PrimaryButton></div>
                            <div className="col text-start"><ModalSecondaryBtn modalBtn="View more" modalHeading="Appartment" actionBtn="Apply" /></div>
                        </div>
                        <div className="mt-3">
                            <div className="row">
                            <div className="col"><small className=""><a href=""><img src={save == true ? save_fill : saves} className="img-fluid action-logo" onClick={handleCheck} /></a> Marc roll - 12:02 | 18 oct 2023</small></div>
                            <div className="col"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <img src={rent1} class="card-img-top img-fluid" alt="..." />
                    </div>
                </div>
            </section>

            <hr />

            <section className="second-section container py-4">
                <div className="row">
                    <div className="col mt-1">
                        <InputTextFeild placeholder="Search for a city" />
                    </div>
                    <div className="col mt-1">
                        <SelectInput options={type} />
                    </div>
                    <div className="col mt-1">
                        <SelectInput options={properties} />
                    </div>
                    <div className="col mt-1">
                        <SelectInput options={properties2} />
                    </div>
                    <div className="col mt-1">
                        <ModalInput value="Price" content={priceContent} />
                    </div>
                    <div className="col text-end">
                        <PrimaryButton>Save Search</PrimaryButton>
                    </div>
                    <div className="col">
                       <ModalSecondaryBtn modalBtn="Advance search" modalHeading="More filters" actionBtn="Apply" />
                    </div>
                </div>
            </section>

            <section className="third-section container py-4">
                <h4 className="text-highline py-2">Properties</h4>
                <div className="row row-cols-1 row-cols-lg-3 g-4">
                    <div className="col">
                        <div className="card prop_card">
                            <img src={rent3} className="card-img-top" />

                                <div class="card-body b_card">
                                    <div className="row">
                                        <div className="col col-9"><h4 className=" text-highline">23,000 CFA/month</h4></div>
                                        <div className="col text-end"><span className="badge badge-primary">For Rent</span></div>
                                    </div>
                                    <label className=" fw-bold fs-5">Appartment 205</label><br />
                                    <small className="text-secondary">Terminus mimboman - Yaounde</small><br />
                                    <span className="badge">1 Living room</span>
                                    <span className="badge">2 Bed room</span>
                                    <span className="badge">1 Kitchen</span>
                                    <div className="row">
                                        <div className="col"><small className=""><a href=""><img src={save == true ? save_fill : saves} className="img-fluid action-logo" onClick={handleCheck} /></a> Marc roll</small></div>
                                        <div className="col text-end"><small className="text-secondary">12 oct 2023</small></div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="row text-center d-flex justify-content-center">
                                        <button className="btn btn-t col col-4 text-white py-2 footer-card-primary-btn">Contact owner</button>
                                        <button className="btn btn-t col col-4 text-white py-2 footer-card-secondary-btn">View more</button>
                                    </div>
                                </div>
                        </div>
                    </div>

                    
                </div>
            </section>
            <div className="mx-5 col-4" id="notification">
                <div class="alert alert-green alert-dismissible fade show" role="alert" >
                    <img src={info} className="img-fluid col-1 px-1" /><strong> Info</strong> This page is Incomplete & not responsive
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>    
    );
}
 
export default Properties; 
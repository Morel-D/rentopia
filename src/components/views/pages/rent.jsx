import { OutLinePrimaryButton, PrimaryButton, SecondaryButton, UploadImageButton, UploadImagesButton } from "../../widget/button";
import { LoadingModal } from "../../widget/modals";
import { InputTextFeild, ModalInput, SelectInput, TextAreaInput } from "../../widget/textfeild";
import no_image from "../../../assets/icon/no-image.png"
import no_images from "../../../assets/icon/no-images.png"
import tags from "../../../assets/icon/tags.png"
import info from "../../../assets/icon/info_pr.png"


import { propertyType, priceCondition, leaseTime, propertyMain } from "../../tools/options";

import { useState } from "react";

const Rent = () => {

    const [rooms, setRooms] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [tag, setTag] = useState([]);
    const [tagsNotice, setTagNotice] = useState('d-none');
    const [imageCover, setImageCover] = useState(null);
    const [subImages, setSubImage] = useState([]);
    const [isHovered, setHovered] = useState(false);



    const handleImageCover = (e) => 
    {
        const file = e.target.files[0];

        if(file)
        {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImageCover(e.target.result);
            }

            reader.readAsDataURL(file);
        }
    }


    const handleDeleteCover = (e) => 
    {
        setImageCover(null)
    }

    const handeSubImages = (e) =>
    {
        const files = e.target.files;

        // Convert the FileList to an array
        const newImages = Array.from(files).map(file => {
          return {
            file,
            url: URL.createObjectURL(file)
          };
        });
    
        // Update the state with the new array of images
        setSubImage(prevSubImages => [...prevSubImages, ...newImages]);
    };

    const handleDeleteSubs = (index) => 
    {
         // Create a copy of the current tag array
    const Images = [...subImages];
    // Remove the tag at the specified index
    Images.splice(index, 1);
    // Update the state with the modified array
    setSubImage(Images);
    }



    const removeTag = (index) =>
    {
    // Create a copy of the current tag array
    const updatedTag = [...tag];
    // Remove the tag at the specified index
    updatedTag.splice(index, 1);
    // Update the state with the modified array
    setTag(updatedTag);
    }

    const addTag = (e) =>
    {
        e.preventDefault();

        if(rooms != "" && rooms != null && rooms != "Room(s)")
        {
          if(quantity != "" && quantity != null)
          {
            setTagNotice("d-none");
            const newData = { rooms, quantity };

            // Update the state to include the new data
            setTag([...tag, newData]);
        
            // Clear the input fields after adding data
            setRooms("");
            setQuantity("");
          }
        } else{
            setTagNotice("text-danger");
            console.log('Nothing')
        }
    }


    const priceVaraity =
    (
        <div className="">
            <div className="text-white px-4 py-2">The price varies in rescpect to ?</div>
            <div className="bg-white px-4 py-2">
                <small className="text-secondary">Ex: 12,000 CFA/ 3 weeks -- or -- 20,000 CFA/Month</small>
                <div className="row py-3">
                    <div className="col col-5"><InputTextFeild type="number" placeholder="Min price" /></div>
                    <div className="col text-center mt-2">-</div>
                    <div className="col col-5"><SelectInput options={priceCondition} /></div>
                </div>
                <div className="py-2 text-center">
                    <PrimaryButton>Apply</PrimaryButton>
                </div>
            </div>
        </div>
    );


    const leaseTerm =
    (
        <div className="">
            <div className="text-white px-4 py-2">Establishes a time period</div>
            <div className="bg-white px-4 py-2">
                <small className="text-secondary">No need to fill of there's no time period</small>
                <div className="row py-3">
                    <div className="col col-5"><InputTextFeild type="number" placeholder="number" /></div>
                    <div className="col text-center mt-2">-</div>
                    <div className="col col-5"><SelectInput options={leaseTime} /></div>
                </div>
                <div className="py-2 text-center">
                    <PrimaryButton>Apply</PrimaryButton>
                </div>
            </div>
        </div>
    );

    const priceType = [
        {label: "Price type"},
        {label: "Fix"},
        {label: "Negotiable"},
    ]

    const type = [
        {label: "Select type"},
        {label: "For Rent"},
        {label: "For Sale"},
    ]
    

    return ( 
        <section className="rent-section mb-5">
            <div className="container text-start">
                <h4 className="text-highline">Fill in this form</h4>
                <p className="text-secondary mb-5">Your transparent and detailed listing contributes to a streamlined and efficient process for connecting with potential tenants</p>
                <div className="mb-4 col-12 col-lg-4">
                 <SelectInput options={type} />
                 <small className="text-secondary">What is the puprose of this property ?</small>
                </div>
                <div className="row">
                    <div className="col col-12 col-lg-7" id="left-divider">
                        <small className="text-highline"><img src={info} className="img-fluid" style={{ height: 'auto', width: '20px'}}/> Kindly provide the requested property information for a seamless rental process</small>
                        <div className="mt-2">
                            <form action="">
                                <div className="row row-cols-lg-2 row-cols-1 g-4">
                                    <div className="col">
                                        <SelectInput options={propertyType} />
                                    </div>
                                    <div className="col">
                                        <InputTextFeild placeholder="Property's name (if any)" />
                                    </div>

                                    <div className="col" style={{width: "800px"}}>
                                        <TextAreaInput placeholder="Property description" />
                                    </div>
                                    <div className="col">
                                        <InputTextFeild placeholder="What's the property's address ?" />
                                        <small className="mx-2 text-secondary">Ex: city - reigon</small>
                                    </div>
                                    <div className="col">
                                        <InputTextFeild placeholder="Phone number" />
                                        <small className="mx-2 text-secondary">So that people can join you</small>
                                    </div>
                                    <div className="col">
                                        <InputTextFeild placeholder="Property Price" />
                                    </div>
                                    <div className="col">
                                        <ModalInput value="Vary per.." content={priceVaraity} />
                                    </div>
                                    <div className="col">
                                        <SelectInput options={priceType} />
                                    </div>
                                    <div className="col">
                                        <ModalInput value="Term Leases" content={leaseTerm} />
                                        <div className="mx-2 mt-1" style={{lineHeight: "14px"}}>
                                        <small className="text-secondary">Define the period of time in which a contracted lease is in place</small>
                                        </div>
                                    </div>
                                    <div className="col" style={{width: "800px"}}>
                                        <div className="row">
                                        <small className="text-highline mb-2"><img src={info} className="img-fluid" style={{ height: 'auto', width: '20px'}}/> Specify property rooms by filling in the information below.</small>
                                            <div className="col col-6" id="left-divider">
                                                <p className="text-secondary">Specify main rooms and quantities for a detailed understanding of the property.</p>
                                                <div className="row">
                                                    <div className="col col-12 col-lg-4 g-1"><InputTextFeild type="number" placeholder="quantity" value={quantity} onChange={(e) => {setQuantity(e.target.value)}} /></div>
                                                    <div className="col text-center mt-2 d-none d-lg-block">-</div>
                                                    <div className="col col-12 col-lg-7 g-1"><SelectInput value={rooms} onChange={(e) => {setRooms(e.target.value)}} options={propertyMain} /></div>
                                                </div>
                                                <div className="">
                                                <small className={tagsNotice}>Fill in both text feilds to proceed</small> 
                                                </div>
                                                <div className="mt-4 d-flex">
                                                    <OutLinePrimaryButton onClick={addTag}>Add room</OutLinePrimaryButton>
                                                </div>
                                            </div>
                                            <div className="col">
                                                {tag.length > 0 ? (
                                                    <div className="row row-cols-3 g-2">
                                                    {tag.map((t, index) => (
                                                        <div key={index} className="col mx-3">
                                                           <span className="badge"><label className="text-center">{t.quantity} {t.rooms} </label><button type="button" class="btn-close mx-1" onClick={() => removeTag(index)}></button></span>
                                                        </div>
                                                    ))}
                                            </div>
                                                ): (
                                                    <div className="text-center">
                                                        <img src={tags} className="img-fluid mt-5 mt-lg-0" style={{ height: 'auto', width: '120px' }} alt="Cover" />
                                                        <p className="text-secondary">No Tag added</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col mx-2">
                        <div className="mb-4">
                            <div className="row">
                                <small className="text-highline mb-2"><img src={info} className="img-fluid" style={{ height: 'auto', width: '20px'}}/> Maximize demand, upload property images for improved viewing and appreciation.</small>
                                <div className="col col-5"><div className="mt-2"><UploadImageButton onChange={handleImageCover} /></div></div>
                                <div className="col"><p className="text-secondary">Upload an image of your property for the cover page</p></div>
                            </div> 
                            <div className="card p-3">
                                <div className="text-center">
                                    {imageCover ? ( <div className="image-container">
                                                        <img src={imageCover} className="img-fluid" style={{ height: 'auto', width: '200px' }} alt="Cover" />
                                                        
                                                            <button className="hover-button" onClick={handleDeleteCover}>
                                                             &times;
                                                            </button>
                                                        
                                                        </div>
    ) : (<img src={no_image} className="img-fluid" style={{height: "auto", width: "200px"}} />)}
                                    {imageCover ? (<p></p>) : (<p className="text-secondary">No Image imported</p>)}
                                </div>
                            </div>        
                        </div>
                        <div className="mb-4">
                            <div className="row">
                                <div className="col col-5"><div className="mt-2"><UploadImagesButton onChange={handeSubImages} /></div></div>
                                <div className="col"><p className="text-secondary">Upload additional images of for better view</p></div>
                            </div> 
                            <div> {subImages.length > 1 ? (<small  className="text-highline" onClick={() => setSubImage([])} style={{textDecoration: "none", cursor: "pointer"}}>Delete all images</small>) : (<small></small>) } </div>
                            <div className="card p-3">
                                <div className="" style={{ height: '250px', overflowY: 'auto' }}>
                                    {subImages.length > 0 ? (
                                        <div  className=" row row-cols-3 g-4">
                                            {subImages.map((image, index) => (
                                                <div key={index} className="col">
                                                      <span className="image-container">
                                                        <img src={image.url}  alt={`Uploaded ${index + 1}`} className="img-fluid" style={{height: "auto", width: "150px"}} />
                                                            <button key={index} className="hover-button" onClick={() => handleDeleteSubs(index)}>
                                                            &times;
                                                        </button>
                                                      </span>
                                                      
                                                </div>
                                            ))}
                                        </div>
                                    ) : (<div className="text-center"><img src={no_images} className="img-fluid" style={{height: "auto", width:  "200px" }} /><p className="text-secondary">No Image imported</p></div>) }

                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
                <div className="row mt-4 text-end">
                    <div className="col"><PrimaryButton>Save & post</PrimaryButton> </div>
                    <div className="col col-2"><SecondaryButton>Save</SecondaryButton> </div>

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
 
export default Rent;
import { OutLinePrimaryButton, PrimaryButton, SecondaryButton, UploadImageButton, UploadImagesButton } from "../../widget/button";
import { LoadingModal } from "../../widget/modals";
import { InputTextFeild, ModalInput, SelectInput, TextAreaInput } from "../../widget/textfeild";
import no_image from "../../../assets/icon/no-image.png"
import no_images from "../../../assets/icon/no-images.png"
import tags from "../../../assets/icon/tags.png"
import info from "../../../assets/icon/info_pr.png"


import { propertyType, priceCondition, leaseTime, propertyMain } from "../../tools/options";

import { useState } from "react";

const Rent = ({translation}) => {

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
            <div className="text-white px-4 py-2">{translation.activityInputPropertyVaryModalTitle}</div>
            <div className="bg-white px-4 py-2">
                <small className="text-secondary">{translation.activityInputPropertyVaryModalDecription}</small>
                <div className="row py-3">
                    <div className="col col-5"><InputTextFeild type="number" placeholder={translation.activityInputPropertyVaryMoadlMin} /></div>
                    <div className="col text-center mt-2">-</div>
                    <div className="col col-5"><SelectInput options={priceCondition({translation})} /></div>
                </div>
                <div className="py-2 text-center">
                    <PrimaryButton>{translation.activityInputPropertyVaryMoadlBtn}</PrimaryButton>
                </div>
            </div>
        </div>
    );


    const leaseTerm =
    (
        <div className="">
            <div className="text-white px-4 py-2">{translation.activityInputLeasesModalTitle}</div>
            <div className="bg-white px-4 py-2">
                <small className="text-secondary">{translation.activityInputLeasesModalSubtitle}</small>
                <div className="row py-3">
                    <div className="col col-5"><InputTextFeild type="number" placeholder={translation.activityInputLeasesModalPlaceholders} /></div>
                    <div className="col text-center mt-2">-</div>
                    <div className="col col-5"><SelectInput options={leaseTime({translation})} /></div>
                </div>
                <div className="py-2 text-center">
                    <PrimaryButton>{translation.activityInputLeasesModalButtonText}</PrimaryButton>
                </div>
            </div>
        </div>
    );

    const priceType =  [
        {label: translation.activityInputPriceType1},
        {label: translation.activityInputPriceType2},
        {label: translation.activityInputPriceType3},
    ]

    const type = [
        {label: translation.activityInputType1},
        {label: translation.activityInputType2},
        {label: translation.activityInputType3},
    ]
    

    return ( 
        <section className="container rent-section mb-5">
            <div className="container text-start">
                <h4 className="text-highline text-start">{translation.activityTitle}</h4>
                <p className="text-secondary mb-5">{translation.actityDescription}</p>
                <div className="mb-4 col-12 col-lg-4">
                 <SelectInput options={type} />
                 <small className="text-secondary">{translation.activityInputTypeDecription}</small>
                </div>
                <div className="row">
                    <div className="col col-12 col-lg-7" id="left-divider">
                        <small className="text-highline"><img src={info} className="img-fluid" style={{ height: 'auto', width: '20px'}}/>{translation.activityInfo1}</small>
                        <div className="mt-2">
                            <form action="">
                                <div className="row row-cols-lg-2 row-cols-1 g-4">
                                    <div className="col">
                                        <SelectInput options={propertyType({translation})} />
                                    </div>
                                    <div className="col">
                                        <InputTextFeild placeholder={translation.activityInputPropertyName} />
                                    </div>

                                    <div className="col" style={{width: "800px"}}>
                                        <TextAreaInput placeholder={translation.activityInputPropertyDecription} />
                                    </div>
                                    <div className="col">
                                        <InputTextFeild placeholder={translation.activityInputPropertyAddress} />
                                        <small className="mx-2 text-secondary">{translation.activityInputPropertyAddressDecription}</small>
                                    </div>
                                    <div className="col">
                                        <InputTextFeild placeholder={translation.activityInputPropertyPhone} />
                                        <small className="mx-2 text-secondary">{translation.activityInputPropertyPhoneDecription}</small>
                                    </div>
                                    <div className="col">
                                        <InputTextFeild placeholder={translation.activityInputPropertyPrice1} />
                                    </div>
                                    <div className="col">
                                        <ModalInput value={translation.activityInputPropertyVaryValue} content={priceVaraity} />
                                    </div>
                                    <div className="col">
                                        <SelectInput options={priceType} />
                                    </div>
                                    <div className="col">
                                        <ModalInput value={translation.activityInputLeases} content={leaseTerm} />
                                        <div className="mx-2 mt-1" style={{lineHeight: "14px"}}>
                                        <small className="text-secondary">{translation.activityInputLeasesDecription}</small>
                                        </div>
                                    </div>
                                    <div className="col" style={{width: "800px"}}>
                                        <div className="row">
                                        <small className="text-highline mb-2 text-start"><img src={info} className="img-fluid" style={{ height: 'auto', width: '20px'}}/> {translation.activityInfo2}</small>
                                        <p className="text-secondary d-lg-none"> {translation.activityTagDescription}</p>

                                            <div className="col col-6" id="left-divider">
                                                <p className="text-secondary d-lg-block d-none">{translation.activityTagDescription}</p>
                                                <div className="container row">
                                                    <div className="col col-12 col-lg-4 g-1"><InputTextFeild type="number" placeholder={translation.activityInputTagPlaceholder} value={quantity} onChange={(e) => {setQuantity(e.target.value)}} /></div>
                                                    <div className="col-1 text-center mt-2 d-none d-lg-block">-</div>
                                                    <div className="col col-12 col-lg-7 g-1"><SelectInput value={rooms} onChange={(e) => {setRooms(e.target.value)}} options={propertyMain({translation})} /></div>
                                                </div>
                                                <div className="">
                                                <small className={tagsNotice}>{translation.activityTagError}</small> 
                                                </div>
                                                <div className="mt-4 d-flex">
                                                    <OutLinePrimaryButton onClick={addTag}>{translation.activityAddRoomBtn}</OutLinePrimaryButton>
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
                                                        <img src={tags} className="img-fluid mt-1 mt-lg-5 mt-lg-0" style={{ height: 'auto', width: '120px' }} alt="Cover" />
                                                        <p className="text-secondary">{translation.activityTagstatus}</p>
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
                                <small className="text-highline mb-lg-2 mt-lg-0 mt-5 mb-4"><img src={info} className="img-fluid" style={{ height: 'auto', width: '20px'}}/>{translation.activityInfo3}</small>
                                <div className="col col-5"><div className="mt-2"><UploadImageButton children={translation.activityImageUploadBtn} onChange={handleImageCover} /></div></div>
                                <div className="col"><p className="text-secondary">{translation.activityImageUploadDescription}</p></div>
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
                                    {imageCover ? (<p></p>) : (<p className="text-secondary">{translation.activityImageUploadStatus}</p>)}
                                </div>
                            </div>        
                        </div>
                        <div className="mb-4">
                            <div className="row">
                                <div className="col col-5"><div className="mt-2"><UploadImagesButton children={translation.activityImagesUploadBtn} onChange={handeSubImages} /></div></div>
                                <div className="col"><p className="text-secondary">{translation.activityImageUploadDescription1}</p></div>
                            </div> 
                            <div> {subImages.length > 1 ? (<small  className="text-highline" onClick={() => setSubImage([])} style={{textDecoration: "none", cursor: "pointer"}}>{translation.activityImageDelete}</small>) : (<small></small>) } </div>
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
                                    ) : (<div className="text-center"><img src={no_images} className="img-fluid" style={{height: "auto", width:  "200px" }} /><p className="text-secondary">{translation.activityImageUploadDescription}</p></div>) }

                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
                <div className="row mt-4 text-lg-end text-start">
                    <div className="col"><PrimaryButton>{translation.activitySaveAndPost}</PrimaryButton> </div>
                    <div className="col col-lg-2 col"><SecondaryButton>{translation.activitySave}</SecondaryButton> </div>

                </div>
            </div>
                <div className="mx-5 col-12 col-lg-4" id="notification">
                    <div class="alert alert-green alert-dismissible fade show" role="alert" >
                        <img src={info} className="img-fluid col-1 px-1" /><strong> Info</strong> "Save" & "Save & Post" buttons are unavailable 
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
        </section>
     );
}
 
export default Rent;
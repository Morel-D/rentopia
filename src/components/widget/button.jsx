import {motion} from "framer-motion";
import { hoverBtn } from "../tools/animation";
import '../tools/include';

const PrimaryButton = ({children, onclick, disabled, style}) => {   

    return ( 
        <motion.button
        variants={hoverBtn} whileHover="hover" disabled={disabled}
        type='button' className="py-2" id="primary-btn" onClick={onclick} style={style}>{children}</motion.button>
     );
}


const LinkPrimaryButton = ({children, onclick, link, disabled, style}) => {   

    return ( 
        <motion.a
        variants={hoverBtn} whileHover="hover" disabled={disabled}
        type="button" href={link} className="py-2 text-center" id="primary-btn" onClick={onclick} style={{textDecoration: "none"}}>{children}</motion.a>
     );
}

const OutLineWhiteButton = ({children, onClick, className}) => 
{
    return (
        <button type='button' className={className} id="ouline-btn" onClick={onClick}>{children}</button>
    );
}


const OutLinePrimaryButton = ({children, onClick, className}) => 
{
    return (
        <motion.button
        variants={hoverBtn} whileHover="hover"
        type='button' className="py-2 col-12" id="ouline-primary-btn" onClick={onClick}>{children}</motion.button>
    );
}

const SecondaryButton = ({children, onclick}) => {
    return ( 
        <motion.button
        variants={hoverBtn} whileHover="hover"
        type='button' className='py-2' id="secondary-btn" onClick={onclick}>{children}</motion.button>
     );
}

const UploadImageButton = ({children, onChange}) =>
{
    return (
        <div>
        <input type="file" accept="image/*" multiple id="uploadFile" className="d-none" onChange={onChange} />
        <motion.label
        variants={hoverBtn} whileHover="hover"
        for="uploadFile" className="text-center py-2" id="primary-btn" style={{cursor: "pointer"}}>
            {children}
        </motion.label>
        </div>
    );
}


const UploadProfile = ({src, onChange}) =>
{
    return (
        <div style={{ width: "150px", height: "150px", overflow: "hidden", borderRadius: "50%" }}>
        <input type="file" accept="image/*" multiple id="uploadProfile" className="d-none" onChange={onChange} />
        <label for="uploadProfile"><img src={src}  className="img-fluid" style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}/></label>
        </div>
    );
}

const UploadImagesButton = ({children, onChange}) =>
{
    return (
        <div>
        <input type="file" accept="image/*" multiple id="uploadFiles" className="d-none" onChange={onChange} />
        <motion.label
        variants={hoverBtn} whileHover="hover"
        for="uploadFiles" className="text-center py-2" id="primary-btn" style={{cursor: "pointer"}}>
            {children}
        </motion.label>
        </div>
    );
}

 
export {PrimaryButton, SecondaryButton, OutLineWhiteButton, OutLinePrimaryButton, LinkPrimaryButton, UploadImageButton, UploadImagesButton, UploadProfile};
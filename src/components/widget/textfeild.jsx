import React from "react";

const InputTextFeild = ({placeholder, onChange, value, type, idStyle, style}) =>
{
    return <input type={type} className="form-control py-2 inputText" id={idStyle} placeholder={placeholder} onChange={onChange} value={value} min="0" style={style} />
}



const GroupInput = ({placeholder, children, value, onchange, onClick}) => 
{
 return <div class="input-group mb-3 ">
  <input type="text" class="form-control py-2 inputText" value={value} onChange={onchange} id="input-padding" placeholder={placeholder} aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button class="btn " type="button" id="primary-round-btn" onClick={onClick}>{children}</button>
</div>
}

const SelectInput = ({ value, onChange, options }) => {
    return (
      <select value={value} onChange={onChange} class="form-select py-2 inputText">
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };


const ModalInput = ({value, content}) => 
{
  return(
    <div class="dropdown">
      <input type="text" value={value} className="form-select py-2 inputText" data-bs-toggle="dropdown" />
      <div class="dropdown-menu dropdown-menu-lg" id="modal-dropDown">                          
       {content}
       <div className="py-2" ><br /></div>
      </div>
    </div> 
    );
};

const TextAreaInput = ({value, placeholder}) => 
{
  return (
    <textarea className="form-control inputText-ta py-2" cols="20" rows="10" placeholder={placeholder} style={{height: "150px"}}></textarea>
  );
}


export {InputTextFeild, SelectInput, GroupInput, ModalInput, TextAreaInput}
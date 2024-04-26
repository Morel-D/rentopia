import React, { useState } from "react";
import '../tools/include';
import {motion} from "framer-motion";
import { hoverBtn } from "../tools/animation";



const ModalPrimaryBtn = ({modalBtn, modalHeading, modalContent, actionBtn, onClick, footerClass, headerClass}) => 
{
    
       
   return (
    <div>
        <button
        variants={hoverBtn} whileHover="hover"
        type="button" class="py-2" id="primary-btn" data-bs-toggle="modal" onClick={onClick} data-bs-target="#exampleModal">
        {modalBtn}
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class={headerClass}>
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{modalHeading}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {modalContent}
                    </div>
                    <a href="Google.com" class={footerClass} style={{backgroundColor: "#2B6777", textDecoration: "none"}}>
                        <div className="container text-center text-white">
                            {actionBtn}
                            {/* <button type="button" class="btn py-2 col-4" id="primary-btn">{actionBtn}</button> */}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
   )
}


const ConditionModalPrimaryBtn = ({ dbTarget, modalBtn, modalHeading, modalContent, actionBtn, onClick, footerClass, headerClass, disabled, style, footerOnClick, href }) => {
    return (
      <div>
        <button
          type="button"
          className="py-2"
          id="primary-btn"
          data-bs-toggle="modal"
          onClick={onClick}
          data-bs-target={"#"+dbTarget}
          disabled={disabled}
          style={style}
        >
          {modalBtn}
        </button>
  
          <div className="modal fade" id={dbTarget} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className={headerClass}>
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    {modalHeading}
                  </h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">{modalContent}</div>
                <a onClick={footerOnClick} href={href} className={footerClass} style={{ backgroundColor: "#2B6777", textDecoration: "none", cursor: "pointer" }}>
                  <div className="container text-center text-white">{actionBtn}</div>
                </a>
              </div>
            </div>
          </div>
      </div>
    );
  };

const ModalSecondaryBtn = ({modalBtn, modalHeading, modalContent, actionBtn}) => 
{
    
       
   return (
    <div>
        <button type="button" class="py-2" id="secondary-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        {modalBtn}
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{modalHeading}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {modalContent}
                    </div>
                    <a href="Google.com" class="modal-footer" style={{backgroundColor: "#2B6777", textDecoration: "none"}}>
                        <div className="container text-center text-white">
                            {actionBtn}
                            {/* <button type="button" class="btn py-2 col-4" id="primary-btn">{actionBtn}</button> */}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
   )
}


const LoadingModal = ({modalBtn, modalHeading, modalContent, actionBtn}) => 
{
    return (
        <div>
        <button type="button" class="py-2" id="primary-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        {modalBtn}
        </button>
    
        <div class="modal fade" id="exampleModal2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div className="p-5">
                        <div className="loader"></div><br />
                        <p className="mt-2 fs-5">please wait...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export { ModalPrimaryBtn, ModalSecondaryBtn, LoadingModal, ConditionModalPrimaryBtn}
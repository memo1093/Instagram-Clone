import React, { useEffect } from "react";

function OptionsModal({ postId,openModal,setOpenModal }) {
  useEffect(() => {
    let modalBox=document.querySelector("#modal-box")
    let scale=1.2
    let opacity=0
    if (openModal) {
        document.body.style.overflow="hidden"

        const widthInterval = setInterval(()=>{
          scale-=0.025
          modalBox.style.transform=`scale(${scale})`
        },10)

        const opacityInterval=setInterval(()=>{
          opacity+=0.125
          modalBox.style.opacity=opacity
        },10)
        setTimeout(()=>{
          clearInterval(widthInterval)
          clearInterval(opacityInterval)
        },80)
      }else{
        document.body.style.overflow="auto"
      }
    document.addEventListener("mousedown", (e) => {
      e.target.className === "modal" &&
        (setOpenModal(false));
      
    });
  }, [openModal, setOpenModal]);
  return openModal?(
      <div id={"modal-" + postId} className="modal">
        <div id="modal-box" className="modal-box">
          <button className="modal-button modal-button-red">Report</button>
          <button className="modal-button modal-button-red">Unfollow</button>
          <button className="modal-button">Go to Post</button>
          <button className="modal-button">Share to...</button>
          <button className="modal-button">Copy Link</button>
          <button className="modal-button">Embed</button>
          <button className="modal-button">Cancel</button>
        </div>
      </div>
  ):"";
}

export default OptionsModal;

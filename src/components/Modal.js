import React from 'react'
import ReactDom from 'react-dom'

const Modal = () => {
    return ReactDom.createPortal(
        <div className="modal">
            <div className="modal-content">
                modal component
            </div>
        </div>
        ,
        document.getElementById("modal")
    )
}

export default Modal

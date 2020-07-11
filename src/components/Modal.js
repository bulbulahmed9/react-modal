import React from 'react'
import ReactDom from 'react-dom'

const Modal = () => {
    return ReactDom.createPortal(
        <div className="modal">
            <div className="modal-content">
                <button className="close">X</button>
                <form>
                    <div className="email">
                        <label>Your Email</label>
                        <input type="email" />
                    </div>
                    <div className="password">
                        <label>Your Password</label>
                        <input type="password" />
                    </div>
                    <button className="login">Login</button>
                </form>
            </div>
        </div>
        ,
        document.getElementById("modal")
    )
}

export default Modal

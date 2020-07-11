import React from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { closeModal } from '../../services/actions/modalAction'



const Modal = ({ closeModal, isOpen }) => {

    // When the user clicks anywhere outside of the modal, close it
    let modal = document.getElementById("myModal")
    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal()
        }
    };

    return ReactDom.createPortal(
        <div data-test="modal" id="myModal" className={isOpen ? "modal" : "modal d-none"}>
            <div data-test="modal-content" className="modal-content">
                <button data-test="close" onClick={() => closeModal()} className="close">X</button>
                <form>
                    <div data-test="input-field" className="email">
                        <label>Your Email</label>
                        <input type="email" />
                    </div>
                    <div data-test="input-field" className="password">
                        <label>Your Password</label>
                        <input type="password" />
                    </div>
                    <button data-test="submit" type="submit" onClick={(e) => {
                        e.preventDefault()
                        closeModal()
                    }} className="login">Login</button>
                </form>
            </div>
        </div>
        ,
        document.getElementById("modal")
    )
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
}

const data = state => ({
    isOpen: state.modalReducer
})


export default connect(data, { closeModal })(Modal)

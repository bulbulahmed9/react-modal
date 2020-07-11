import React from 'react'
import Modal from '../Modal/Modal'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { openModal } from '../../services/actions/modalAction'


const Home = ({ openModal }) => {
  return (
    <div data-test="home" className="home">
      <button data-test="open" onClick={() => openModal()} className="btn">Open Modal</button>
      <Modal data-test="modal" />
    </div>
  )
}

Home.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default connect(null, { openModal })(Home)

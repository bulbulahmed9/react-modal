import React from 'react'
import './App.css'
import Modal from './components/Modal'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { openModal } from './services/actions/modalAction'


const App = ({ openModal }) => {
  return (
    <div className="app">
      <button onClick={() => openModal()} className="btn">Open Modal</button>
      <Modal />
    </div>
  )
}

App.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default connect(null, { openModal })(App)

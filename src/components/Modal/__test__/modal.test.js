import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../Modal'
import { render } from '@testing-library/react'


test('should ', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Modal />, div)
  ReactDOM.unmountComponentAtNode(div)
})
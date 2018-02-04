import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'
import expect from 'expect'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('should return Promise when calling list', () => {
  const wrapper = shallow(<App />)
  const wordsPromise = wrapper.instance().list

  expect(typeof wordsPromise.then).toBe('function')
  expect(!!wordsPromise.then).toBe(true)
})
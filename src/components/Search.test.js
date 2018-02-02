import React from 'react'
import { shallow } from 'enzyme'
import expect, { createSpy } from 'expect'

import Search from './Search'

/* Testing structure */
it('should render an input with value, onChange handler and disabled', () => {
  const searchValue = 'css'
  const spy = createSpy()
  const wrapper = shallow(<Search searchValue={searchValue} onChange={spy} disabled={false}/>)

  expect(wrapper.type()).toBe('input')

  const input = wrapper.props()
  
  expect(input.placeholder).toBe('Search Word')
  expect(input.disabled).toBe(false)
  expect(input.className).toBe('Search')
  expect(input.value).toBe(searchValue)
  expect(input.onChange).toBe(spy)
})

it('should render an input with placeholder text Search It', () => {
  const spy = createSpy()
  const wrapper = shallow(<Search searchValue={''} onChange={spy} disabled={false} placeholder='Search It'/>)
  const input = wrapper.props()

  expect(wrapper.type()).toBe('input')
  expect(input.placeholder).toBe('Search It')
})

it('should render an input disabled', () => {
  const spy = createSpy()
  const wrapper = shallow(<Search searchValue={''} onChange={spy} disabled={true}/>)
  const input = wrapper.props()

  expect(wrapper.type()).toBe('input')
  expect(input.disabled).toBe(true)
  expect(input.className).toBe('Search Disabled')
})

/* Testing behaviour */
it('should call onChange when the input was changed', () => {
  const searchValue = 'css'
  const spy = createSpy()
  const wrapper = shallow(<Search searchValue={searchValue} onChange={spy} disabled={false}/>)

  const event = {event: { target: 'react' }}
  wrapper.simulate('change', event)

  expect(spy).toHaveBeenCalledWith(event)
})
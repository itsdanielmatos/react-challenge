import React from 'react'
import { shallow } from 'enzyme'
import expect, { createSpy } from 'expect'

import Text from './Text'

/* Testing structure */
it('should render text when a children is given', () => {
  const children = 'css'
  const wrapper = shallow(<Text>{children}</Text>)
  const wrapperChildren = wrapper.children()
  const li = wrapper.props()  

  expect(wrapper.type()).toBe('li')
  expect(li.className).toBe('Text')
  expect(wrapperChildren.text()).toBe(children)
})

it('should render score when score is given', () => {
  const children = 'css'
  const score = 0  
  const wrapper = shallow(<Text score={score}>{children}</Text>)
  const wrapperChildren = wrapper.children()

  expect(wrapperChildren.first().type()).toBe('span')  
  expect(wrapperChildren.first().props().className).toBe('Score')  
  expect(wrapperChildren.first().text()).toBe('100%')  
})

it('should not render text when a children is not given', () => {
  const wrapper = shallow(<Text></Text>)

  const wrapperChildren = wrapper.children()
  expect(wrapperChildren.length).toBe(0)
})

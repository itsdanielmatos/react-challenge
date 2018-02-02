import React from 'react'
import { shallow } from 'enzyme'
import expect, { createSpy } from 'expect'

import Text from './Text'
import SelectedList from './SelectedList'

/* Testing structure */
it('should render all elements in lists when searchValue is empty string', () => {
  const searchValue = ''
  const list = [
    {id: 0, text: 'react-native'},
    {id: 1, text: 'css'}
  ]
  const wrapper = shallow(<SelectedList searchValue={searchValue} list={list} />)

  expect(wrapper.type()).toBe('ul')
  expect(wrapper.props().className).toBe('SelectedList')

  const wrapperChildren = wrapper.children()
  expect(wrapperChildren.length).toBe(2)
  expect(wrapperChildren.first().type()).toBe(Text)
  expect(wrapperChildren.first().children().text()).toBe(list[0].text)
  expect(wrapperChildren.last().type()).toBe(Text)
  expect(wrapperChildren.last().children().text()).toBe(list[1].text)
})

it('should render No Words Available when list is empty', () => {
  const searchValue = ''
  const list = []
  const wrapper = shallow(<SelectedList searchValue={searchValue} list={list} />)
  const wrapperChildren = wrapper.children()
  
  expect(wrapperChildren.length).toBe(1)
  expect(wrapperChildren.first().type()).toBe(Text)
  expect(wrapperChildren.first().children().text()).toBe('No Words Available')
})

it('should render css text when css is searchValue', () => {
  const searchValue = 'css'
  const list = [
    {id: 0, text: 'react-native'},
    {id: 1, text: 'css'}
  ]
  const wrapper = shallow(<SelectedList searchValue={searchValue} list={list} />)

  const wrapperChildren = wrapper.children()
  expect(wrapperChildren.length).toBe(1)
  const wrapperText = wrapperChildren.children()
  expect(wrapperText.text()).toBe(searchValue)
})

it('should render react-native text when react is searchValue', () => {
  const searchValue = 'react'
  const list = [
    {id: 0, text: 'react-native'},
    {id: 1, text: 'css'}
  ]
  const wrapper = shallow(<SelectedList searchValue={searchValue} list={list} />)

  const wrapperChildren = wrapper.children()
  expect(wrapperChildren.length).toBe(1)
  const wrapperText = wrapperChildren.children()
  expect(wrapperText.text()).toInclude(searchValue)
})

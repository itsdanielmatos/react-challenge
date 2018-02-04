import React from 'react'
import { shallow } from 'enzyme'
import expect, { createSpy } from 'expect'
import Fuse from 'fuse.js'

import Text from './Text'
import SelectedList from './SelectedList'

const options =  {
  caseSensitive: false,
  shouldSort: false,
  includeScore: true,
  threshold: 0.3,
  tokenize: true,
  matchAllTokens: true,
  keys:['text']
}

/* Testing structure */
it('should render all elements in lists when searchValue is empty string', () => {
  const searchValue = ''
  const list = [
    {id: 0, text: 'react-native'},
    {id: 1, text: 'css'}
  ]
  const fuse = new Fuse(list,options) 
  const wrapper = shallow(<SelectedList searchValue={searchValue} list={list} fuse={fuse} />)

  expect(wrapper.type()).toBe('ul')
  expect(wrapper.props().className).toBe('SelectedList')
  expect(typeof wrapper.instance().props.fuse).toBe('object')

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
  const fuse = new Fuse(list,options) 
  const wrapper = shallow(<SelectedList searchValue={searchValue} list={list} fuse={fuse} />)
  const wrapperChildren = wrapper.children()
  
  expect(wrapperChildren.length).toBe(1)
  expect(wrapperChildren.first().type()).toBe(Text)
  expect(wrapperChildren.first().children().text()).toBe('Search Unavailable')
})

it('should render css text when css is searchValue', () => {
  const searchValue = 'css'
  const list = [
    {id: 0, text: 'react-native'},
    {id: 1, text: 'css'}
  ]

  const fuse = new Fuse(list,options) 
  const wrapper = shallow(<SelectedList searchValue={searchValue} list={list} fuse={fuse}/>)

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
  const fuse = new Fuse(list,options) 
  const wrapper = shallow(<SelectedList searchValue={searchValue} list={list} fuse={fuse} />)

  const wrapperChildren = wrapper.children()
  expect(wrapperChildren.length).toBe(1)
  const wrapperText = wrapperChildren.children()
  expect(wrapperText.text()).toInclude(searchValue)
})

it('should render `No results match your search´ when there are no results', () => {
  const searchValue = '007'
  const list = [
    {id: 0, text: 'react-native'},
  ]
  const fuse = new Fuse(list,options) 
  const wrapper = shallow(<SelectedList searchValue={searchValue} list={list} fuse={fuse} />)
  const wrapperChildren = wrapper.children()
  const wrapperText = wrapperChildren.first().children()
  expect(wrapperChildren.first().type()).toBe(Text)
  expect(wrapperText.text()).toInclude('No results match your search')
})

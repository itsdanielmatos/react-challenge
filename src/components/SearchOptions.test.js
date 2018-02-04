import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import Option from './Option'
import SearchOptions from './SearchOptions'

it('should render all options in children', () => {
    const handleOptions = () => {} 
    const disabled = false 
    const wrapper = shallow(<SearchOptions disabled={disabled} handleOptions={handleOptions}/>)

    const wrapperChildren = wrapper.children() 

    expect(wrapper.type()).toBe('div')
    expect(wrapper.props().className).toBe('SearchOptions')
    expect(wrapperChildren.length).toBe(2)
    expect(wrapperChildren.first().type()).toBe(Option)
})

it('should render all options in children disabled', () => {
    const handleOptions = () => {} 
    const disabled = true 
    const wrapper = shallow(<SearchOptions disabled={disabled} handleOptions={handleOptions}/>)
    expect(wrapper.type()).toBe('div')
    expect(wrapper.props().className).toBe('SearchOptions Disabled')
})
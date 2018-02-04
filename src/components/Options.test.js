import React from 'react'
import { shallow } from 'enzyme'
import expect, { createSpy } from 'expect'

import Option from './Option'

it('should render an Option with label and input', () => {
    const onChange = () => {}
    const id = 'match-case'
    const type = 'checkbox'
    const disabled = false 
    const label = 'Match Case' 
    const wrapper = shallow(
        <Option id= 'match-case' type= 'checkbox' disabled={disabled} onChange={onChange} label= 'Match Case' />
    )
    const wrapperChildren = wrapper.children() 

    expect(wrapper.props().className).toBe('Option')
    expect(wrapper.type()).toBe('label')
    expect(wrapperChildren.length).toBe(2)
    expect(wrapperChildren.first().type()).toBe('input')
    expect(wrapperChildren.first().props().disabled).toBe(false)
    expect(wrapperChildren.first().props().type).toBe('checkbox')
    expect(wrapperChildren.last().text()).toBe(label)
})

it('should render an Option disabled', () => {
    const onChange = () => {} 
    const id = 'match-case' 
    const type = 'checkbox' 
    const disabled = true 
    const label = 'Match Case' 
    const wrapper = shallow(
        <Option id= 'match-case' type= 'checkbox' disabled={disabled} onChange={onChange} label= 'Match Case' />
    )
    const wrapperChildren = wrapper.children() 

    expect(wrapperChildren.first().props().disabled).toBe(true)

})

it('should call onChange when the input has changed', () => {
    const spy = createSpy() 
    const id = 'match-case' 
    const type = 'checkbox' 
    const disabled = true 
    const label = 'Match Case' 
    const wrapper = shallow(
        <Option id= 'match-case' type= 'checkbox' disabled={disabled} onChange={spy} label= 'Match Case' />
    )

    const wrapperChildren = wrapper.children() 
    const event = {event: { target: wrapperChildren.first().html }}
    wrapperChildren.first().simulate('change', event)
    expect(spy).toHaveBeenCalledWith(event)
})

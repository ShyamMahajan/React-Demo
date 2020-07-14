import React from 'react';
import { shallow } from 'enzyme';

import Error from './../error';
import { checkProps, findByTestAttr } from '../../../../test/testUtils'

/**
 * Factory Function to create a ShallowWrapper for the App Component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
*/

const setup = (props={},state=null) => {
    return shallow(<Error {...props} />)
}
    describe('Error message is visible if there is an error', () => {
        test("Error message is visible if the errors object is non-empty",() =>{
            const wrapper = setup({
                errors : {
                    name : "This field is required"
                },
                touched : {
                    name : true
                },
                submitCount : 0,
                field : "name"
            })
            expect(wrapper.find(".error-msg").text()).toBe("This field is required");
        })

        test("Error message is visible if the errors object is non-empty and submitCount > 1",() =>{
            const wrapper = setup({
                errors : {
                    name : "This field is required"
                },
                touched : {
                    name : false
                },
                submitCount : 1,
                field : "name"
            })
            expect(wrapper.find(".error-msg").text()).toBe("This field is required");
        })
        
    });
    describe('Error message is empty when there is no errors', () => {
        test("Renders without error",() => {
            const wrapper = setup({
                errors : {
                },
                touched : {
                },
                submitCount : 0,
                field : "field"
            })
            const ErrorComponent = findByTestAttr(wrapper,'component-error')
            expect(ErrorComponent.length).toBe(1)
        })
        test("Error message is not visible if the errors object is empty",() =>{
            const wrapper = setup({
                errors : {
                    
                },
                touched : {
                    name : true
                },
                submitCount : 0,
                field : "name"
            })        
            expect(wrapper.find(".error-msg").text()).toBe("");

        })
        test("error message is not visible if the touched is false", () => {
            const wrapper = setup({
                errors : {
                    name:"is Required"                    
                },
                touched : {
                    name : false
                },
                submitCount : 0,
                field : "name"
            })        
            expect(wrapper.find(".error-msg").text()).toBe("");
        })
        
    });
    test("Does not throw error with expected props", () => {
            const expectedProps = {
                errors : {
                },
                touched : {
                },
                submitCount : 0,
                field : "field"
            }
            checkProps(Error,expectedProps)
        })

    

   
    

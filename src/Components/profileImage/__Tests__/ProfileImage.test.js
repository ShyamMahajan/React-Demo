import React from 'react';
import { shallow } from 'enzyme'

import ProfileImage from '../ProfileImage';
import { findByTestAttr, checkProps } from '../../../../test/testUtils';

/**
 * Factory Function to create a ShallowWrapper for the App Component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
*/
const setup = (props={},state=null) => {
    return shallow(<ProfileImage {...props} />)
}

describe('<ProfileIamge/>', () => {
    test("Renders without Error", () => {
        const wrapper = setup({url : ""});
        const ProfileImageComponent = findByTestAttr(wrapper,'component-profileImage')
        expect(ProfileImageComponent.length).toBe(1)
    });

    test("Does not throw error with expected props",() => {
        const expectedProps = {
            url : "",
            center: true
        }
        checkProps(ProfileImage,expectedProps)
    })
});
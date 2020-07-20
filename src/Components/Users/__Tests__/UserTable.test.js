import React from 'react';
import {shallow, mount} from 'enzyme';
import { createBrowserHistory } from "history";


import UserTable from '../UserTable';
import { getUserList } from '../../../Apis'
import { findByTestAttr, checkProps } from '../../../../test/testUtils'

const history = createBrowserHistory();
const defaultProps = {
	history : history
	
};
/**
 * Factory Function to create a ShallowWrapper for the App Component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
*/
const setup = (props = {}, state = null) => {
	const setupProps = {
		...defaultProps,
		...props
	};
	return mount(<UserTable {...setupProps} />);
};

describe('<UserTable/>', () => {
    test("It renders without error", () => {
		const wrapper = setup()
		const UserComponent = findByTestAttr(wrapper, "user-table")
		expect(UserComponent.length).toBe(1);
	})
	describe('addUser button and search input-Box', () => {
		let wrapper;
		let UserTableComp;
		beforeEach(() => {
			wrapper = setup()
			UserTableComp = wrapper.find("UserTable")
		})
		test("renders the input box", () => {
			const Input = findByTestAttr(wrapper,"search-input")
			expect(Input.length).toBe(1);
		})
		test("renders the button and on click calls the formAction function", ( ) => {
			const Button = findByTestAttr(wrapper,"add-button")

			Button.find("button").simulate("click");
			expect(wrapper.props().history.location.pathname).toBe("/users/add")
		})
	});
});

import React from 'react';
import { shallow, mount, dive } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { createBrowserHistory } from "history";


import UserForm from './../UserForm';
import { findByTestAttr, checkProps } from '../../../../test/testUtils';

const submitHandler = jest.fn();
const handleSubmit = jest.fn();
const history = createBrowserHistory();


const defaultProps = {
	editedData: {},
	action: 'add',
	submitHandler: submitHandler,
	handleSubmit: handleSubmit,
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
	return mount(<UserForm {...setupProps} />);
};

describe('<UserForm/>', () => {
	test('Renders without errors', () => {
		const wrapper = setup();
		const FormComponent = findByTestAttr(wrapper, 'component-userForm');
		expect(FormComponent.length).toBe(1);
	});

	test('does not throw an error for expected props', () => {
		const expectedProps = {
			editedData: {},
			action: 'add',
			submitHandler: submitHandler,
			handleSubmit: handleSubmit
		};
		checkProps(UserForm, expectedProps)
	});

	describe('Action and Backward Button', () => {
		test("renders the action add", () => {
			const wrapper = setup( { action : "add" } );
			const actionText = findByTestAttr(wrapper, "action");
			expect(actionText.contains("add")).toBe(true)
		})
		test("renders the action edit", () => {
			const wrapper = setup( { action : "edit" } );
			const actionText = findByTestAttr(wrapper, "action");
			expect(actionText.contains("edit")).toBe(true)
		})

		test("backward button update the route to '/users'", () => {
			const wrapper = setup( { action : "edit" } );
			const backwardComp = wrapper.find('.Backward');
			expect(backwardComp.length).toBe(1)
			backwardComp.simulate("click")
			const UserFormComp = wrapper.find("UserForm");
			expect(UserFormComp.props().history.location.pathname).toBe("/users")
		})
	});
	describe('Renders the correct input box for name and email', () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setup();
		});
		test('Renders the input box for name', () => {
			const inputComp = findByTestAttr(wrapper, 'input-name');
			expect(inputComp.length).toBe(1);
		});
		test('Renders the input box for email', () => {
			const inputComp = findByTestAttr(wrapper, 'input-email');
			expect(inputComp.length).toBe(1);
		});
	});
	describe('when sumbit button clicked submitHandler is called', () => {
		let wrapper;
		let buttonComp;
		let submitButton;
		beforeEach(() => {
			wrapper = setup();
			buttonComp = findByTestAttr(wrapper, 'submit-button');
			submitButton = buttonComp.find('button');
		});
		test('button is rendered', () => {
			expect(submitButton).toBeTruthy();
		});
		test('submitHandler is called when submitButton is clicked', () => {
			submitButton.simulate('click');
			expect(submitHandler).toBeCalledTimes(1);
		});

		test('submitHandler is called with add action', () => {
			submitButton.simulate('click');
			expect(submitHandler.mock.calls[1][0]).toBe('add');
		});

		test('submitHandler is called with edit action', () => {
			wrapper = setup({ action: 'edit' });
			submitButton = wrapper.find('button');
			submitButton.simulate('click');
			expect(submitHandler.mock.calls[2][0]).toBe('edit');
		});
	});
});

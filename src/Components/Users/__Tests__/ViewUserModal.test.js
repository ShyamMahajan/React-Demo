import React from 'react';
import { shallow } from 'enzyme';

import ViewUsersModal from '../ViewUsersModal';
import { findByTestAttr,checkProps } from '../../../../test/testUtils'

/**
 * Factory Function to create a ShallowWrapper for the App Component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
*/

const setup = (props = {}, state = null) => {
	return shallow(<ViewUsersModal {...props} />);
};
test('renders without error ', () => {
	const wrapper = setup({
		userDetails: { avatar: '', name: '', email: '' },
		modal: true,
		toggle: () => 1
	});
	const modalComponent = findByTestAttr(wrapper, 'component-ViewUserModal');
	expect(modalComponent.length).toBe(1);
});

test('Does not throw warning with expected props', () => {
	const expectedProps = {
		userDetails: {
			avatar: 'abcsd.com',
			name: 'UserName',
			email: 'email@email.com'
		},
		modal: true,
		toggle: () => 1
	};
	checkProps(ViewUsersModal,expectedProps)
});

test('renders userDetails with expected props', () => {
	const wrapper = setup({
		userDetails: { avatar: 'img.com', name: 'userName', email: 'email' },
		modal: true,
		toggle: () => 1
	});
	const modalComponent = findByTestAttr(wrapper, 'component-ViewUserModal');
	expect(modalComponent.find("[src='img.com']").length).toBe(1);
	expect(modalComponent.contains('userName')).toBe(true);
	expect(modalComponent.contains('email')).toBe(true);
});

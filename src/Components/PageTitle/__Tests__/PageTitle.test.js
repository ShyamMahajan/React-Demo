import React from 'react';
import { shallow } from 'enzyme';

import PageTitle from './../PageTitle';
import { findByTestAttr, checkProps } from '../../../../test/testUtils';

/**
 * Factory Function to create a ShallowWrapper for the App Component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
*/
const setup = (props = {}) => {
	return shallow(<PageTitle {...props} />);
};

describe('<PageTitle/>', () => {
	test('renders without Error', () => {
		const wrapper = setup({ title: 'users' });
		const PageComponent = findByTestAttr(wrapper, 'component-pageTitle');
		expect(PageComponent.length).toBe(1);
	});

	test('Does not throw error with expected props', () => {
		const expectedProps = {
			title: 'users'
		};
		checkProps(PageTitle, expectedProps);
	});

	test('Renders title with expected props', () => {
		const wrapper = setup({ title: 'Users' });
		const PageTitleComponent = findByTestAttr(wrapper, 'component-pageTitle');
		expect(PageTitleComponent.find('.title').text()).toBe('Users');
	});
});

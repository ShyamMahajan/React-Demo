import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

/**
 * Factory Function to create a ShallowWrapper for the App Component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
*/

const setup = (props ={}, state = null) => {
  const wrapper = shallow(<App {...props}/>)
  if(state) wrapper.setState(state)
  return wrapper;
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within. 
 * @param {*} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper,val) => {
  return wrapper.find(`[data-test='${val}']`);
}

test('renders without crashing', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper,"component-app");
  expect(appComponent.length).toBe(1)
});
 
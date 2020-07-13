import checkPropTypes from 'check-prop-types';

/**
 * Return node(s) with a given data-test attribute.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper} 
 */

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
}


/**
 * Gives warning with expected props.
 * @function checkProps
 * @param {ReactComponent} component - React Component
 * @param {object} confirmingProps - props to pass into React component 
 */

 export const checkProps = (component,confirmingProps) => {
     const propError = checkPropTypes(
        component.propTypes,
        confirmingProps,
        'props',
        component.name
    );
     expect(propError).toBeUndefined()
 }
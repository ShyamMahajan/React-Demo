import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleWrapper = styled.div`
  color : red;
  font-size : 12px;
  font-weight: 600;
`;

const Error = (props) => {
  const { 
    field,
    errors,
    touched,
    submitCount
  } = props
  if ((errors[field] && touched[field]) || submitCount > 0) {
    return (
      <StyleWrapper data-test="component-error">
      <span className="error-msg">
        {errors[field]}
      </span>
      </StyleWrapper>
    );
  } else {
    return <StyleWrapper data-test="component-error"> <span className="error-msg"></span> </StyleWrapper>;
  }
}

Error.propTypes = {
  field : PropTypes.string.isRequired,
  errors: PropTypes.shape({
    name : PropTypes.string,
    email : PropTypes.string
  }),
  touched : PropTypes.object.isRequired,
  submitCount : PropTypes.number.isRequired
}

export default Error;
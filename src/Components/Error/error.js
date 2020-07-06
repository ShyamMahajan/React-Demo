import React from 'react';
import styled from 'styled-components'

const StyleWrapper = styled.div `
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
      <StyleWrapper>
      <span className="error-msg">
        {errors[field]}
      </span>
      </StyleWrapper>
    );
  } else {
    return <span></span>;
  }

}

export default Error;
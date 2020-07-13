import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import styled from "styled-components";
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  .key {
    font-family: montserrat-bold;
    font-size: 16px;
    overflow-wrap: break-word;
    font-weight:600;
  }
  .value {
    overflow-wrap: break-word;
  }
`;

const viewCompanyModal = props => {
  const { modal, toggle, userDetails } = props;
  return (
    <Wrapper data-test = "component-ViewUserModal">
      <Modal centered isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <div>
            <h6>
              <strong>View User</strong>
            </h6>
          </div>
        </ModalHeader>
        <ModalBody>
          <Wrapper>
            <div className="text-center mb-15">
              <img
                className="img-thumbnail "
                style={{ width: "200px", height: "200px" }}
                src={
                  userDetails.avatar
                }
                alt="ProfileImage"
              />
            </div>
            <div className="row">
              <div className="col-5 text-right key">Name</div>
              <div className="col-7 text-left value">{userDetails.name}</div>
            </div>
            <div className="row my-1">
              <div className="col-5 text-right key">Email</div>
              <div className="col-7 text-left value">
                {userDetails.email}
              </div>
            </div>
          </Wrapper>
        </ModalBody>
      </Modal>
    </Wrapper>
  );
};

viewCompanyModal.propTypes = {
  userDetails : PropTypes.object.isRequired,
  modal : PropTypes.bool.isRequired,
  toggle : PropTypes.func.isRequired
}

export default viewCompanyModal;

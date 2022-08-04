import React from "react";
import {
  StyledModal,
  Backdrop,
  Container,
  ContainerContent,
  CloseIcon,
} from "./styles";

function ModalContent({ openModal, children, close }) {
  return (
    <StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={openModal}
      BackdropComponent={Backdrop}
    >
      <Container>
        <CloseIcon onClick={() => close(false)}>X</CloseIcon>
        <ContainerContent>{children}</ContainerContent>
      </Container>
    </StyledModal>
  );
}

export default ModalContent;

import ModalUnstyled from "@mui/base/ModalUnstyled";
import { styled } from "@mui/system";

export const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const ContainerContent = styled("div")`
  display: flex;
  flex-direction: row;
`;

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  width: 40%;
  border: 1px solid black;
`;

export const CloseIcon = styled("div")`
  cursor: pointer;
  padding: 5px;
  color: #707070;
  display: flex;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  justify-content: flex-end;
`;

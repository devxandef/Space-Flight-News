import styled from "styled-components";

export const Space = styled.div`
  margin-top: ${(props) => props.T}px;
  margin-right: ${(props) => props.R}px;
  margin-bottom: ${(props) => props.B}px;
  margin-left: ${(props) => props.L}px;
`;

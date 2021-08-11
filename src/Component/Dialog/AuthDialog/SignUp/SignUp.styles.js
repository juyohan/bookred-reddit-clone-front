import styled, {css} from "styled-components";

export const MessageDiv = styled.div`
  height: 22px;
  visibility: hidden;
  opacity: 0;
  color: #ad0303bd;
  font-size: 12px;
  padding-left: 12px;
  transition: visibility 0.3s, opacity 0.3s linear;
  padding-top: 2px;
  padding-bottom: 2px;

  ${props => props.divAnimation && css`
    visibility: visible;
    opacity: 1;
    color: #db0a0abd;
    font-size: 12px;
    padding-left: 12px;
    transition: visibility 0.3s, opacity 0.3s linear;
    padding-top: 2px;
    padding-bottom: 2px;
  `}
  
  ${props => props.status && css`
    color : dodgerblue;
  `}
`;
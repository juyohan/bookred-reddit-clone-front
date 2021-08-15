import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const SubMenuWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 43.5px;
  right: 0.1rem;
  border-radius: 4px;
  padding: 4px;
  width: 200px;
  color: black;
  background: white;
  flex-direction: column;
  border: 1px solid lightgray;
`

export const SubMenuDiv = styled(Link)`
  text-decoration: none;
  color: black;
  height: 40px;
  width: 100%;
  padding-left: 50px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;

  ${props => props.icon && css`
    color: lightgray;
    padding-left: 20px;
  `}
  &:hover {
    background: lightgray;
    color: black;
  }

  &:active {
    background: darkgray;
  }

  & > svg {
    margin-right: 10px;
  }

  ${props => props.disabled && css`
    pointer-events: none;
  `}
`

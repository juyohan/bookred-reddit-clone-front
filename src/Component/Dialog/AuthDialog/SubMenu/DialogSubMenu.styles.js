import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const SubMenuWrapper = styled.div`
  z-index: 999;
  position: fixed;
  display: flex;
  top: 48px;
  right: 15px;
  border-radius: 0 0 4px 4px ;
  padding: 4px;
  width: 161px;
  color: black;
  background: white;
  flex-direction: column;
  border: 1px solid #edeff1;
  border-top: none;
`

export const SubMenuDiv = styled(Link)`
  text-decoration: none;
  color: #1c1c1c;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;

  ${props => props.type === 'button' && css`
    color: lightgray;
  `}
  
  &:hover {
    background: #0079d3;
    color: #edeff1;
    fill: #edeff1;
  }

  &:active {
    background: darkgr;
  }

  & > svg {
    margin-right: 10px;
    margin-left: 5px;
  }

  ${props => props.disabled && css`
    pointer-events: none;
  `}
`

export const MenuTitle = styled.h3`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .5px;
  line-height: 12px;
  text-transform: uppercase;
  color: #878a8c;
  margin: 8px 0 4px 12px;
`

export const MenuLine = styled.div`
  border-top: 1px solid #edeff1;
  margin: 0 16px; 
`

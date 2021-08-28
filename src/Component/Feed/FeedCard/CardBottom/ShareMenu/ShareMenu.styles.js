import styled from "styled-components";

export const ShareMenuWrapper = styled.div`
    margin-top: 0;
  border-radius: 4px;
  color: black;
  background-color: inherit;
  position: absolute;
  z-index: 10;
  border: 1px solid white;
  overflow: hidden; 
  box-shadow: 0 2px 4px 0 rgba(28,28,28,0.2);
`

export const ShareMenuButton = styled.button`
    padding: 8px 16px 8px 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  text-transform: capitalize;
  white-space: nowrap;
  color: gray;
  align-items: center;
  flex-direction: row;
  text-align: left;
  cursor: pointer;
  border : none;
  background-color: white;
  width: 100%;
  
  &:not(:first-child) {
    border-top: 1px solid lightgray;
    border-bottom: none;
  }
  
  & > svg {
    padding-right: 4px;
  }
  &:hover{
    background-color: lightskyblue;
    color: black;
  }
`
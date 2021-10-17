import styled, {css} from "styled-components";

export const PostMenuWrapper= styled.div`
    background-color: white;
  margin-bottom: 15px;
  border-radius: 5px;
`

export const PostMenuItem = styled.div`
    margin: 0 0 12px;
  overflow: auto;
  align-items: stretch;
  display: flex;
  flex-direction: row;
`

export const MenuItemButton = styled.button`
  color: lightgray;
  background : none;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  padding: 15px 24px;
  z-index: 1;
  position: relative;
  flex: 1;
  text-align: center;
  border-radius: 0;
  border-color: #edeff1;
  border-width: 0 1px 1px 0;
  border-style: solid;
  justify-content: center;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: #e9f4ff;
  }
  
  ${props => props.isActive && css `
    color: dodgerblue;
    
    &::after {
      content: " ";
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      height: 2px;
      background-color: dodgerblue;
    }
  `}
  
  & > svg {
    margin-right: 8px;
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    width: 20px;
  }
`
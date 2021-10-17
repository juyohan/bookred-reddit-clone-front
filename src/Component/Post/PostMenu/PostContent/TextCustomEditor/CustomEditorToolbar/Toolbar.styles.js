import styled, {css} from "styled-components";

export const ToolbarWrapper = styled.div`
  position: sticky;
  top: 48px;
  z-index: 8;
  align-items: center;
  background-color: #f6f7f8;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
`

export const ToolbarItemsWrapper = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  margin-left: 4px;
  position: relative;
  display: flex;
`

export const ToolbarItems = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
`

export const ToolbarMarkDown = styled.div`
    position: relative;
`

export const MarkDownButton = styled.button`
    position: relative;
  border: 1px solid transparent;
  color: #0079d3;
  fill: #0079d3;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 16px;
  text-transform: unset;
  min-height: 24px;
  min-width: 24px;
  padding: 4px 8px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;
  white-space: pre-wrap;
  word-break: keep-all;
  background-color: transparent;
  cursor: pointer;
`

export const ToolbarButton = styled.button`
  border-radius: 4px;
  color: #878a8c;
  padding: 0;
  position: relative;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;
  transition: background-color .1s;
  cursor: pointer;
  background-color: transparent;
  
  &:hover {
    background-color: lightgray;
  }
  
  ${props => props.isActive && css`
    color: black;
  `}
`

export const ToolbarLine = styled.div`
    border-right: 1px solid #edeff1;
  box-sizing: border-box;
  height: 14px;
  margin: 0 6px;
  width: 1px;
`

export const ToolbarSpan = styled.span`
  ${props => props.tests === false && css`
    display: none;
  `}
`
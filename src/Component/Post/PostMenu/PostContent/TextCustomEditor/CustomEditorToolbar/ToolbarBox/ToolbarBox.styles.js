import styled from "styled-components";

export const ToolbarBoxWrapper = styled.div`
    margin-top: 0;
  overflow: visible;
  border: 1px solid #edeff1;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(28,28,28,0.2);
  color: #1c1c1c;
  background-color: white;
  position: absolute;
  z-index: 10;
`

export const ToolbarBoxContainer = styled.div`
    flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 0 1px #efeff1, 0 1px 10px #edeff1;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 2px 5px
`
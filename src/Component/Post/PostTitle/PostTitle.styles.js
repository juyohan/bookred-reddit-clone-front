import styled from "styled-components";

export const PostTitleWrapper = styled.div`
    padding: 4px;
  margin: 16px 0;
  border-bottom: 1px solid white;
  display: flex;
`

export const PostTitleDiv = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: black;
  flex: 1;
`

export const DraftButton = styled.button`
    font-size: 12px;
  font-weight: 700;
  letter-spacing: .5px;
  line-height: 24px;
  text-transform: uppercase;
  margin-left: 10px;
  position: relative;
  border: 1px solid transparent;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  align-items: center;
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;
  color: dodgerblue;
  
  &:hover {
    background-color: darkgray;
  }
  
  &:active {
    background-color: gray;
  }
`

export const DraftCount = styled.span`
    font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  background-color: dimgray;
  border-radius: 2px;
  color: white;
  margin: 4px;
  padding: 1px 3px;
`
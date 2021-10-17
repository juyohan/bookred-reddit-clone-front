import styled from "styled-components";

export const ContentTitleWrapper = styled.div`
  margin-bottom: 8px;
`

export const TitleDiv = styled.div`
  position: relative;
`

export const InputTitle = styled.textarea`
  overflow: hidden;
  overflow-wrap: break-word;
  height: 39px;
  padding: 8px 68px 8px 16px;
  border: 1px solid #edeff1;
  background-color: transparent;
  resize: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  outline: none;

  &:focus {
    box-shadow: none;
    border: 1px solid black;
  }
`

export const InputTitleLen = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .5px;
  line-height: 12px;
  text-transform: uppercase;
  bottom: 12px;
  pointer-events: none;
  position: absolute;
  right: 12px;
  color: #878a8c;
`
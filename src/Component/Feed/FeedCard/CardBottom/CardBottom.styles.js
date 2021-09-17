import styled from "styled-components";
import {Link} from "react-router-dom";

export const CardBottomWrapper = styled.div`
    display: flex;
  padding : 0 8px 0 4px;
  flex-direction: row;
  flex-grow: 1;
  align-items: stretch;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: 1px;
`

export const CommentButton = styled(Link)`
    padding: 8px;
  word-break: normal;
  margin-right: 4px;
  align-items: center;
  display: flex;
  border-radius: 2px;
  cursor: pointer;
  background-color: inherit;
  border: none;
  color: gray;
  text-decoration: none;
  
  &:hover {
    background-color: lightgray;
  }

  & > svg {
    margin-right: 6px;
  }
`

export const ShareButton = styled.button`
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  padding: 8px;
  word-break: normal;
  margin-right: 4px;
  align-items: center;
  display: flex;
  border-radius: 2px;
  cursor: pointer;
  background-color: ${(props) => props.open === true ? 'lightgray' : 'inherit'};
  border: none;
  color: gray;
  text-decoration: none;
  
  &:hover {
    background-color: lightgray;
  }

  & > svg {
    margin-right: 6px;
  }
`

export const EtcButtonDiv = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
`

export const EtcButton = styled.button`
    border-radius: 2px;
  height: 24px;
  border: none;
  background-color: inherit;
  color: gray;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  padding: 0 4px;
  width: 100%;
  
  &:hover{
    background-color: lightgray;
  }
`
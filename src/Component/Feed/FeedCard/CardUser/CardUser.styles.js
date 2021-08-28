import styled from "styled-components";
import {Link} from "react-router-dom";

export const CardUserWrapper = styled.div`
  padding-top: 8px;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  margin : 0 8px 8px;
  align-items: center;
  
  & > span {
    color: gray;
  }
`

export const UserButton = styled(Link) `
    font-size: 12px;
  font-weight: 700;
  display: inline;
  line-height: 20px;
  text-decoration: none;
  vertical-align: baseline;
  color: black;
  
  &:hover {
    text-decoration-line: underline;
  }
`

export const DotIcon = styled.span`   
  line-height: 20px;
  color: gray;
  font-size: 6px;
  margin: 0 4px;
  vertical-align: middle;
`

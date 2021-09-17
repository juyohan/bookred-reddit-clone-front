import styled from "styled-components";
import {BsCaretDownFill, BsCaretUpFill} from "react-icons/all";

export const CardLikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 43px;
  left: 0;
  top: 0;
  align-items: center;
  padding : 8px 4px;
`

export const LikeCount = styled.div`
  margin: 4px 0;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  pointer-events: none;
  word-break: normal;

  color : ${(props) => props.isActive === "UPLIKE" ? 'dodgerblue' 
    : props.isActive === "DOWNLIKE" ? 'orange' : 'black'};
`

export const UpLikeIcon = styled(BsCaretUpFill)`
  cursor: pointer;
  fill: ${props => props.isActive ? 'dodgerblue' : 'black'};
  &:hover {
    color : lightgray;
  }
  &:active {
    fill : dodgerblue;
  }
`

export const DownLikeIcon = styled(BsCaretDownFill)`
  cursor: pointer;
  fill: ${props => props.isActive ? 'orange' : 'black'};
  &:hover {
    color : lightgray;
  }
  &:active {
    fill : orange;
  }
`
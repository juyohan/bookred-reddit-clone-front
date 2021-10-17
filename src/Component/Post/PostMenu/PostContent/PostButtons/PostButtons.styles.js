import styled from "styled-components";
import {Link} from "react-router-dom";

export const PostButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 8px;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 16px;
  
  @media(max-width: 558px) {
    justify-content: center;
    flex-direction: column;
  }
`

export const PostButtonContainer = styled.div`
  flex-direction: row-reverse;
  text-transform: uppercase;
  padding-top: 8px;
  display: flex;
  align-items: center;
  
  @media(max-width: 558px) {
    justify-content: center;
  }
`

export const PostButtonDiv = styled.div`
    box-sizing: border-box;
  display: flex;
  
  @media(min-width: 189px) {
    margin-left: 8px;
  }
`

const PostDefaultButton = styled.button`
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  width: 100%;
  background-color: transparent;
  position: relative;
  cursor: pointer;
`

export const DraftButton = styled(PostDefaultButton)`
    border: 1px solid #0079d3;
  color: #0079d3;
  fill : #0079d3;
  
  &:hover {
    background-color: rgba(0, 121, 211, 0.05);
  }

  &:active {
    background-color: rgba(0, 121, 211, 0.15);
  }
  
  &:disabled {
    cursor: not-allowed;
    filter: grayscale(1);
    border-color: rgba(0, 121, 211, 0.5);
    color: rgba(0, 121, 211, 0.5);
    fill: rgba(0, 121, 211, 0.5);
  }
`

export const PostButton = styled(PostDefaultButton)`
    border: none;
  background-color: #0079d3;
  color: white;
  fill: white;

  &:hover {
    background-color: rgba(0, 121, 211, 0.8);
  }

  &:active {
    background-color: rgba(0, 121, 211, 0.5);
  }
  
  &:disabled {
    cursor: not-allowed;
    filter: grayscale(1);
    background-color: #3293db;
    color : rgba(255, 255, 255, 0.5);
    fill : rgba(255, 255, 255, 0.5);
  }
`
import styled from "styled-components";

export const CardFeedWrapper = styled.div`
    display: flex;
  flex-direction: column;
`

export const CardFeedTitle = styled.div`
    margin : 0 8px;
  padding-right: 5px;
  
  & > h3 {
    display : inline;
  }
`

export const CardFeedDesc = styled.div`
    margin-top: 8px;
  padding: 5px 8px 10px;
  overflow: hidden;
  
  & > p {
    display : inline;
    padding-bottom: 1px;
    margin-bottom: -1px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    overflow: auto;
    word-break: break-word;
    font-family: Noto Sans, Arial, sans-serif;
  }
`
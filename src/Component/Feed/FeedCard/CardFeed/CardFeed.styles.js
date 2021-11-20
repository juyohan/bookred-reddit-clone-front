import styled, {css} from "styled-components";

export const CardFeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardFeedTitle = styled.div`
  margin: 0 8px;
  padding-right: 5px;

  & > h3 {
    display: inline;
  }
`

export const CardFeedDesc = styled.div`
  margin-top: 8px;
  padding: 5px 10px 0;
  font-family: Noto Sans, Arial, sans-serif;
`

export const CardContent = styled.div`
  padding-bottom: 1px;
  margin-bottom: -1px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  overflow: hidden;
  height: 100px;
  word-break: break-word;
  font-family: inherit;
  mask-image: linear-gradient(180deg, #000 60%, transparent);

  & > p:first-child {
    padding-top: 0;
  }

  & > p {
    margin: 0;
    padding: .8em 0 .25em;
  }
  
  ${(props) => props.open && css`
    overflow: auto;
    height: auto;
    padding-bottom: 5px;
    mask-image: unset;
  `}
`

export const UnfoldBtn = styled.div`
  font-family: inherit;
  float: right;
  margin-right: 30px;
  padding-top: 2px;
  font-size: 14px;
  cursor: pointer;
  width: inherit;
  box-sizing: border-box;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline black;
  }
  
  ${(props) => props.open && css`
    display: none;
  `}
`
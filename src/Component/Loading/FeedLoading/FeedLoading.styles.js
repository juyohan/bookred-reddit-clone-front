import styled from "styled-components";
import {FeedWrapper} from "../../Feed/Feed.styles";

export const FeedLoadingWrapper = styled(FeedWrapper)`
    display: flex;
  justify-content: center;
  flex-direction: column;
`

export const FeedLoadingDiv = styled.div`
    display: flex;
  align-items: center;
  flex-direction: column;
  
  & > div {
    padding-bottom: 10px;
  }
  & > span {
    font-weight: 600;
    font-size: 18px;
  }
`
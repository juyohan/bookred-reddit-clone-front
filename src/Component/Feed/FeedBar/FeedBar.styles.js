import styled from "styled-components";

export const FeedBarWrapper = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

export const FeedBarTitle = styled.span`
    margin-left: 5px;
  font-size: 20px;
  font-weight: 500;
  
  &:first-letter {
    text-transform: capitalize;
  }
`;
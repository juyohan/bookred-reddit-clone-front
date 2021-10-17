import styled from "styled-components";

export const PostContainer = styled.div`
  background-color: #dae0e6;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 48px);
  
  @media(max-width: 960px) {
    padding: 0 8px;
  }
`;

export const PostWrapper = styled.div`
  max-width: 1248px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  @media(min-width: 640px) {
    padding: 20px 24px;
  }
  
  
`

export const PostMainMenu = styled.div`
    @media(min-width: 960px) {
      max-width: 740px;
      width: 640px;
    }
  flex: 1 1 100%;
  min-width: 0;
`

export const PostSideMenu = styled.div`
    margin-left: 24px;
  margin-top: 0;
  flex: 0 0 312px;
  width: 312px;
  display: none;
  
  @media(min-width: 960px) {
    display: block;
  }
  
`
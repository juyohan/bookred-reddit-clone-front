import styled, {css} from "styled-components";

export const HeaderAuthWrapper = styled.div`
  padding-right: 15px;
`;

export const HeaderUserImage = styled.div`
    padding-right: 5px;
  position: relative;
  margin-left: 10px;
  border-radius: 4px;
  float: left;
  max-height: 32px;
  max-width: 32px;
  height: 32px;
  width: 32px;
`

export const HeaderImageAndUsernameWrapper = styled.div`
    display: flex;
  align-items: center;
  flex-direction: row;
  width: 150px;
`

export const HeaderAuthButton = styled.button`
  border: 1px solid white;
  background-color: white;
  border-radius: 4px;
  padding: 2px 0;
  min-height: 32px;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: left;
  width: 100%;
  
  cursor: pointer;
  
  &:hover {
    border-color: #edeff1;
    outline: none;
  }
  
  &:focus {
    border-color: #edeff1;
    outline: none;
  }
  
  ${(props) => props.isClick && css`
    border-radius: 4px 4px 0 0;
    border: 1px solid #edeff1;
    border-bottom-color: white;
  `}
  
`

export const UsernameDiv = styled.span`
    font-size: 16px;
  font-weight: 500;
  color: black;
  display: block;
  white-space: nowrap;
  padding-right: 4px;
`;

export const AuthWrapper = styled.div`
    display: flex;
  align-items: center;
  
`;

export const Login = styled.button`
    font-weight: 700;
  font-size: 17px;
  color: #2478FF;
  background-color: white;
  border-radius: 20px;
  border: 2px solid #2478FF;
  height: 40px;
  cursor: pointer;
  
  &:hover {
    background-color: #E6FFFF;
  }
  
  &:active {
    background-color: #D4F4FA;
  }
`;
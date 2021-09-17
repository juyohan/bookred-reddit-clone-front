import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderAuthWrapper = styled.div`
    display: flex;
  align-items: center;
  padding-right: 8px;
`;

export const UserInfo = styled(Link)`
    text-decoration: none;
`

export const Username = styled.div`
    
`;

export const Logo = styled.button`
    border: none;
  background: inherit;
  cursor: pointer;
  
  &:hover {
    color: dodgerblue;
  }
  
  &:active {
    color: deepskyblue;
  }
`

export const AuthWrapper = styled.div`
    display: flex;
  align-items: center;
  
`;

export const Login = styled.button`
    font-weight: 700;
  font-size: 15px;
  color: #2478FF;
  background-color: white;
  border-radius: 15px;
  border: 2px solid #2478FF;
  height: 30px;
  cursor: pointer;
  
  &:hover {
    background-color: #E6FFFF;
  }
  
  &:active {
    background-color: #D4F4FA;
  }
`;
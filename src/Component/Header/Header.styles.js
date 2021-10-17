import styled from 'styled-components';
import {Link} from "react-router-dom";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  //padding-left: 40px;
  //padding-right: 40px;
`;

export const Logo = styled(Link)`
  padding: 0 15px;
  display: flex;
  text-decoration: none;
  align-items: center;
`;

export const LogoTitle = styled.div`
  color: black;
  font-size: 28px;
  font-weight: 600;
  padding-left: 10px;

  @media (max-width: 885px) {
    display: none;
  }
`

export const BlankDiv = styled.div`
    width: 150px;
  
  //@media(max-width: )
  
`

export const SearchDiv = styled.div`
    display: flex;
  flex: .5;

  @media(max-width: 850px) {
    flex: .2;
  }
`
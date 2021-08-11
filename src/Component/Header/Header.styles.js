import styled from 'styled-components';
import {Link} from "react-router-dom";

export const HeaderWrapper = styled.div`
    display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
    padding: 0 10px;
  display: flex;
  text-decoration: none;
  align-items: center;
`;

export const LogoTitle = styled.div`
  color: black;
  font-size: 23px;
  font-weight: 600;
  padding-left: 5px;
`
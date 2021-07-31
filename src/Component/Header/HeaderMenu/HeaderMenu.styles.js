import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const MenuItems = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 14px;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: gray;
`;

export const Item = styled(Link)`
    ${props => props.active && css`
      border-bottom: orange;
    `}
`
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
  background-color: white;
`;

// eslint-disable-next-line no-mixed-operators
export const Item = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 500;
  line-height: 55px;
  margin: 0 15px;
  height: 100%;
  border-bottom: ${(props) => (props.active ? '6px solid #2478FF' : '6px solid white' )};
  
  &:hover {
    border-bottom: 6px solid lightgray;
  }
`
import styled from "styled-components";
import {Link} from "react-router-dom";

export const MenuItems = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-size: 14px;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: white;
`;

export const Item = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;
  line-height: 60px;
  margin: 0 15px;
  height: 100%;
  border-bottom: ${(props) => props.isActive === 'true' ? '6px solid #2478FF' : '6px solid white'};
 
  &:hover {
    border-bottom: 6px solid lightgray;
  }
`

export const TestDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
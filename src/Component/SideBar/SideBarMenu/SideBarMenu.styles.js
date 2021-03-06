import styled from "styled-components";
import {Link} from "react-router-dom";

export const SideBarMenuWrapper = styled.div`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  
  //@media (min-width: 768px) {
  //  padding-left: 50px;  }
`;

export const SideMenuItem = styled(Link)`
    text-decoration: none;
  color: ${props => props.isActive === 'true' ? '#2478FF' : 'black'};
  font-size: 18px;
  margin-bottom: 30px;
  cursor : pointer;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 10px;
    margin-left : 23px;
  }
  
  &:hover {
    color : #2478FF;
  }
  
  
`
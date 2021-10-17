import styled from "styled-components";

export const CustomEditorWrapper = styled.div`
    position: relative;
  border-radius: 4px;
  //border: 1px solid #edeff1;
  border : ${props => props.isActive === true ? '1px solid black' : '1px solid #edeff1'};
  background: white;
  
`

export const TextContent = styled.div`
`

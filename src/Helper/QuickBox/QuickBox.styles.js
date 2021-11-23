import styled, {css} from "styled-components";

export const QuickButtonWrapper = styled.div`
    top: calc(100vh - 17px);
  position: sticky;
  margin-top: 45px;
  display: flex;
  justify-content: left;
  text-align: center;
  transform: translateY(-100%);
`

export const QuickButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;
  width: auto;
  position: relative;
  border: none;
  background-color: #0079d3;
  color: white;
  fill: white;
  display: none;
  
  ${(props) => props.btnStatus && css`
    display: block;
  `}
`

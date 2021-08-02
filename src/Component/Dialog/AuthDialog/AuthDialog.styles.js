import styled from "styled-components";
import {Link} from "react-router-dom";

export const AuthDialogBackGround = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
`;

export const AuthDialogWrapper = styled.div`
  width: 500px;
  background-color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
`;

export const AuthDialogLogo = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  color: black;
  border: none;
  background-color: lightblue;
`;

export const AuthDialogHeader = styled.div`
  display: flex;
  height: 5rem;
  width: inherit;
  background-color: lightblue;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.4rem;
  letter-spacing: 5px;
  text-decoration: none;
`

export const AuthDialogContent = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`;

export const IWLWrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

export const IWLLabel = styled.div`
  font-size: 0.9rem;
  color: black;
  margin-bottom: 0.25rem;
`

export const IWLInputLine = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`

export const IWLInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  line-height: 2.5rem;
  font-size: 0.9rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  ::placeholder {
    color: lightgray;
  }

`;

export const AuthButton = styled.div`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  background: dodgerblue;
  color: white;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  //user-select: none;
  transition: .2s all;

  &:hover {
    background: lightskyblue;
  }

  &:active {
    background: deepskyblue;
  }
`

export const AuthBottomRightWrapper = styled.div`
  margin-top: 1rem;
  text-align: right;
  font-size: 0.8rem;
  margin-left: 13px;
`;

export const AuthBottomRight = styled(Link)`
  color: grey;

  &:hover {
    color: darkgray;
  }
`

export const AuthTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const AuthHandlerWrapper = styled.div`
    display: flex;
  flex-direction: row-reverse;
`;
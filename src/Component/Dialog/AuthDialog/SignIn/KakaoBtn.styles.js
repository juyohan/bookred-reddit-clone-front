import styled from "styled-components";

export const KaKaoButton = styled.div`
  margin-top: .5rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  cursor : pointer;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 12px;
  transition: .2s all;
  background-color: #FEE500;
  color: #191919;
  
  &:hover {
    opacity: 0.5;
  }
  
  &:active {
    opacity: 0.7;
  }
`

export const BtnWrapper = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
`

export const KaKaoImg = styled.img`
    width: 18px;
  height: 18px;
  color: rgba(0, 0, 0, 0.9);
  padding-right: 5px;

`
import styled from "styled-components";

export const HeaderSearchWrapper = styled.div`
  width: auto;
  height: auto;
  border: 1px solid #f6f7f8;
  border-radius: 4px;
  box-sizing: border-box;
  margin-left: 10px;
  margin-right: 5px;
  position: relative;
  
  //padding-right: 100px;
  //@media
`

export const HeaderSearchForm = styled.form`
    box-sizing: border-box;
  display: flex;
  border: 1px solid #edeff1;
  box-shadow: none;
  border-radius: 4px;
  height: 36px;
  background-color: #edeff1;
  
  @media(max-width: 850px) {
    margin-right: 10px;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
`

export const SearchIconDiv = styled.div`
    display: flex;
  align-items: center;
  padding: 0 9px 0 15px;
`

export const SearchInput = styled.input`
    appearance: none;
  background-color: #edeff1;
  color: black;
  font-size: 14px;
  line-height: 14px;
  margin-right: 16px;
  outline: none;
  width: 100%;
  border: none;
  font-weight: 400;

  @media(max-width: 850px) {
    font-size: 16px;
    //width: 16px;
    transition: width 0.2s ease, padding 0.2s ease;
  }
`
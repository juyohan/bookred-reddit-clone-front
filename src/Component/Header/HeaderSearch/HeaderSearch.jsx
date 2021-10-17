import React from 'react';
import {HeaderSearchForm, HeaderSearchWrapper, SearchIconDiv, SearchInput} from "./HeaderSearch.styles";
import {BiSearchAlt2} from "react-icons/all";

const HeaderSearch = () => {
    return (
        <HeaderSearchWrapper>
            <HeaderSearchForm>
                <SearchIconDiv>
                    <BiSearchAlt2 size={"20"}/>
                </SearchIconDiv>
                <SearchInput type={"search"}
                             placeholder={"Search"}
                />
            </HeaderSearchForm>
        </HeaderSearchWrapper>
    )
}

export default HeaderSearch;
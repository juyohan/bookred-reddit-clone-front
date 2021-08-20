import React, {useContext, useEffect} from 'react';
import {Content, HomeWrapper} from "./Home.styles";
import SideBar from "../SideBar";
import Feed from "../Feed";

const Home = () => {
    return (
        <HomeWrapper>
            <Content>
                <SideBar/>
                <Feed/>
            </Content>
        </HomeWrapper>
    );
}

export default Home;
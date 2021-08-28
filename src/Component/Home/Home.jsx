import React, {useContext, useEffect} from 'react';
import {Content, HomeWrapper} from "./Home.styles";
import SideBar from "../SideBar";
import Feed from "../Feed";

const Home = () => {
    return (
        <HomeWrapper>
            <Content>
                {/* 사이드 바 */}
                <SideBar/>
                {/* 피드 */}
                <Feed/>
            </Content>
        </HomeWrapper>
    );
}

export default Home;
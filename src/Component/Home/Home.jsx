import React from 'react';
import {HomeContent, HomeWrapper} from "./Home.styles";
import SideBar from "../SideBar";
import Feed from "../Feed";

const Home = () => {
    return (
        <HomeWrapper>
            <HomeContent>
                {/* 사이드 바 */}
                <SideBar/>
                {/* 피드 */}
                <Feed/>
            </HomeContent>
        </HomeWrapper>
    );
}

export default Home;
import React from 'react';
import {HomeWrapper} from "./Home.styles";
import Header from "../Header";

const Home = () => {
    // console.log("Home : " + useLocation().pathname);

    return (
        <HomeWrapper>
            <Header/>
        </HomeWrapper>
    );
}

export default Home;
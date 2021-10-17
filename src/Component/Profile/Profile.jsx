import React from 'react';
import {HomeContent, HomeWrapper} from "../Home/Home.styles";
import Feed from "../Feed";
import SideBar from "../SideBar";

const Profile = ({location}) => {

    return (
        <HomeWrapper>
            <HomeContent>
                <Feed/>
                <SideBar/>
            </HomeContent>
        </HomeWrapper>
    );
}

export default Profile;
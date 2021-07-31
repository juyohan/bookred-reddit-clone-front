import React, {useState} from 'react';
import {HeaderAuthWrapper, Login, Logo, UserInfo, Username} from "./HeaderAuth.styles";
import {BsFillCaretDownFill} from "react-icons/all";
import Token from "../../../JwtToken/Token";
import AuthDialog from "../../Dialog/AuthDialog";

const HeaderAuth = () => {
    const [isShowing, setIsShowing] = useState(false);

    const onOpenAuthDialog = (e) => {
        e.preventDefault();
        setIsShowing(true);
    }

    const onCloseAuthDialog = (e) => {
        e.preventDefault();
        if(isShowing)
            setIsShowing(false);
    }

    return (
        <HeaderAuthWrapper>
            {
                Token() ?
                    <>
                        <div>
                            이미지
                        </div>

                        <UserInfo to={'/:username'}>
                            <Username>
                                username
                            </Username>
                        </UserInfo>
                        <Logo to={'/sub/menu'}>
                            <BsFillCaretDownFill/>
                        </Logo>
                    </> :
                    <Login onClick={onOpenAuthDialog}>
                        로그인
                    </Login>
            }
            <AuthDialog isShowing={isShowing}
                        close={onCloseAuthDialog}
            />
        </HeaderAuthWrapper>
    );
}



export default HeaderAuth;
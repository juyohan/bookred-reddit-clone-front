import React, {useContext, useRef} from 'react';
import { IoIosArrowDown} from "react-icons/all";
// css
import {
    AuthWrapper,
    HeaderAuthButton,
    HeaderAuthWrapper, HeaderImageAndUsernameWrapper,
    HeaderUserImage,
    Login,
    UsernameDiv
} from "./HeaderAuth.styles";
// 컴포넌트
import AuthDialog from "../../Dialog/AuthDialog";
import DialogSubMenu from "../../Dialog/AuthDialog/SubMenu";
// Context API
import UserContext from "../../../Context/UserContext";
import DialogContext from "../../../Context/DialogContext";
// Cookie
import {getCookie} from "../../../JwtToken/Cookie";

const HeaderAuth = () => {
    const [state, actions] = useContext(UserContext);
    const [show, setShow] = useContext(DialogContext);
    const ref = useRef();

    const onOpenAuthDialog = (e) => {
        e.preventDefault();
        setShow.setAuthDialog(true);
    }

    const onOpenDialogSubMenu = (e) => {
        e.preventDefault();
        if (show.dialogSubMenu)
            setShow.setDialogSubMenu(false);
        else
            setShow.setDialogSubMenu(true);

    }

    return (
        <HeaderAuthWrapper>

            {
                getCookie("Access-Token")
                    ?
                    <AuthWrapper>
                        <HeaderAuthButton onClick={onOpenDialogSubMenu}
                                          ref={ref}
                                          isClick={show.dialogSubMenu}
                        >
                            <HeaderImageAndUsernameWrapper>
                                <HeaderUserImage>
                                    이미지
                                </HeaderUserImage>

                                {/* 닉네임 */}
                                <UsernameDiv>
                                    {state.userInfo.username}
                                </UsernameDiv>
                            </HeaderImageAndUsernameWrapper>

                            <IoIosArrowDown style={{
                                marginRight: '6px'
                            }}/>

                        </HeaderAuthButton>
                    </AuthWrapper>
                    :
                    <Login onClick={onOpenAuthDialog}>
                        로그인
                    </Login>
            }
            <DialogSubMenu dialogRef={ref}
                           username={state.userInfo.username}
            />
            <AuthDialog/>
        </HeaderAuthWrapper>
    );
}


export default HeaderAuth;
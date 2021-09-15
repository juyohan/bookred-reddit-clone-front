import React, {useContext, useRef} from 'react';
import {BsFillCaretDownFill} from "react-icons/all";
// css
import {AuthWrapper, HeaderAuthWrapper, Login, Logo, UserInfo, Username} from "./HeaderAuth.styles";
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
        if (show.dialogSubMenu === true)
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
                        <div>
                            이미지
                        </div>

                        <UserInfo to={`/${state.userInfo.username}`}>
                            <Username>
                                {state.userInfo.username}
                            </Username>
                        </UserInfo>
                        {/* 서브 메뉴 열기 */}
                        <Logo ref={ref}
                              onClick={onOpenDialogSubMenu}>
                            <BsFillCaretDownFill/>
                        </Logo>
                    </AuthWrapper>
                    :
                    <Login onClick={onOpenAuthDialog}>
                        로그인
                    </Login>
            }
            <DialogSubMenu dialogRef={ref}/>
            <AuthDialog/>
        </HeaderAuthWrapper>
    );
}


export default HeaderAuth;
import React, {useRef, useContext} from 'react';
import {BsFillCaretDownFill} from "react-icons/all";
// css
import {AuthWrapper, HeaderAuthWrapper, Login, Logo, UserInfo, Username} from "./HeaderAuth.styles";
// 컴포넌트
import Token from "../../../JwtToken/Token";
import AuthDialog from "../../Dialog/AuthDialog";
// Context API
import UserContext from "../../../Context/UserContext";
import DialogContext from "../../../Context/DialogContext";
import DialogSubMenu from "../../Dialog/AuthDialog/SubMenu";

const HeaderAuth = () => {
    const [state, actions] = useContext(UserContext);
    const [show, setShow] = useContext(DialogContext);

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
                Token() ?
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
                        <Logo onClick={onOpenDialogSubMenu}>
                            <BsFillCaretDownFill/>
                        </Logo>
                    </AuthWrapper>
                    :
                    <Login onClick={onOpenAuthDialog}>
                        로그인
                    </Login>
            }
            <DialogSubMenu/>
            <AuthDialog/>
        </HeaderAuthWrapper>
    );
}


export default HeaderAuth;
import React, {useContext} from 'react';
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
// css
import {SubMenuDiv} from "./DialogSubMenu.styles";
// Context API
import DialogContext from "../../../../Context/DialogContext";
import UserContext from "../../../../Context/UserContext";
// Cookie
import {removeCookie} from "../../../../JwtToken/Cookie";

const DialogSubItem = ({item, disabled, type, onClickLogOut}) => {

    return (
        <SubMenuDiv to={`/${item.id}`}
                    disabled={disabled}
                    icon={item.icon}
                    type={`${type}`}
                    onClick={onClickLogOut}
        >
            {item.icon}
            {item.title}
        </SubMenuDiv>
    );
}

DialogSubItem.propTypes = {
    item : PropTypes.object,
    disabled : PropTypes.bool
}

const DialogSubSingleItems = ({menu, submenu}) => {
    const [dialog, setDialog] = useContext(DialogContext);
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();

    const onClickLogOut = (e) => {
        e.preventDefault();
        // AuthorAPI.logout()
        //     .then(res => {
        //         if (res.status === 200) {
                    alert("로그아웃이 되었습니다.");
                    // 유저정보 초기화
                    setUser.setUserInfo({});
                    // 쿠키 삭제
                    removeCookie("Access-Token");
                    // 서브메뉴 닫음
                    setDialog.setDialogSubMenu(false);
                    // 홈 화면으로
                    history.push('/');
                // }
        // }).catch(err => {
        //     console.log(err);
        // })
    }

    return (
        <>
            {
                submenu ?
                    <>
                        <DialogSubItem item={menu}
                                       disabled
                        />
                        {
                            submenu.map(item => (
                                <DialogSubItem key={`SubMenu_${item.id}`}
                                               item={item}
                                />
                            ))
                        }
                    </>
                    :
                    <DialogSubItem item={menu}
                                   type={'button'}
                                   onClickLogOut={onClickLogOut}
                    />
            }
        </>
    );
}

DialogSubSingleItems.propTypes = {
    menu: PropTypes.object,
    submenu: PropTypes.array
}

export default DialogSubSingleItems;
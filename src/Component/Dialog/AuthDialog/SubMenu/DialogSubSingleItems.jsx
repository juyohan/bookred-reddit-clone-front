import React, {useContext} from 'react';
import PropTypes from "prop-types";
// css
import {MenuLine, MenuTitle, SubMenuDiv} from "./DialogSubMenu.styles";
// Context API
import DialogContext from "../../../../Context/DialogContext";
import UserContext from "../../../../Context/UserContext";
// Cookie
import {removeCookie} from "../../../../JwtToken/Cookie";

const DialogSubItem = ({item, disabled, type, onClickFun, username}) => {
    return (
        <SubMenuDiv to={username ? `/${item.id}/${username}` : `/${item.id}`}
                    disabled={disabled}
                    icon={item.icon}
                    type={type}
                    onClick={onClickFun}
        >
            {item.icon}
            {item.title}
        </SubMenuDiv>
    );
}

DialogSubItem.propTypes = {
    item: PropTypes.object,
    disabled: PropTypes.bool
}

const DialogSubSingleItems = ({menu, submenu}) => {
    const [dialog, setDialog] = useContext(DialogContext);
    const [user, setUser] = useContext(UserContext);

    const onClickLogOut = (e) => {
        e.preventDefault();
        // 메뉴창 닫기
        setDialog.setDialogSubMenu(false);
        alert("로그아웃이 되었습니다.");
        // 유저정보 초기화
        setUser.setUserInfo({});
        // 쿠키 삭제
        removeCookie("Access-Token");
        // 홈 화면으로
        window.location.replace("/");
    }

    const onClickCloseModal = () => {
        setDialog.setDialogSubMenu(false);
    }

    return (
        <>
            {
                menu.submenu ?
                    <>
                        <MenuTitle>
                            {menu.title}
                        </MenuTitle>

                        {
                            submenu.map(item => (
                                <DialogSubItem key={`SubMenu_${item.id}`}
                                               item={item}
                                               username={user.userInfo.username}
                                               onClickFun={onClickCloseModal}
                                />
                            ))
                        }
                    </>
                    :
                    <>
                        <MenuLine/>
                        <DialogSubItem item={menu}
                                       type={'button'}
                                       onClickFun={onClickLogOut}
                        />
                    </>
            }
        </>
    );
}

DialogSubSingleItems.propTypes = {
    menu: PropTypes.object,
    submenu: PropTypes.array
}

export default DialogSubSingleItems;
import React, {useContext} from 'react';
import {SubMenuDiv} from "./DialogSubMenu.styles";
import PropTypes from "prop-types";
import DialogContext from "../../../../Context/DialogContext";
import UserContext from "../../../../Context/UserContext";
import {useHistory} from "react-router-dom";

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

        alert("로그아웃이 되었습니다.");
        // 유저정보 초기화
        setUser.setUserInfo({});
        // jwt Token 삭제
        localStorage.clear();
        // 서브메뉴 닫음
        setDialog.setDialogSubMenu(false);
        // 홈 화면으로
        history.push('/');
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
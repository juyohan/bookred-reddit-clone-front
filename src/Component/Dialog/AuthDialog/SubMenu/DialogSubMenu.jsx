import React, {useContext, useEffect, useRef} from 'react';
// Context API
import DialogContext from "../../../../Context/DialogContext";
// css
import {SubMenuWrapper} from "./DialogSubMenu.styles";
// Component
import DialogSubSingleItems from "./DialogSubSingleItems";
// Icon
import {AiFillSetting, CgProfile, IoIosLogOut} from "react-icons/all";
import PropTypes from "prop-types";

const subMenuList = [
    {
        id: 'myStuff',
        title: 'My Stuff',
        submenu: [
            {
                id: `user`,
                title: 'Profile',
                icon: <CgProfile size={20}/>
            },
            {
                id: 'setting',
                title: 'User Setting',
                icon: <AiFillSetting size={20}/>
            }
        ]
    },
    {
        id: 'logout',
        title: 'Log Out',
        icon: <IoIosLogOut size={20}/>
    }
]

const DialogSubMenu = ({dialogRef, username}) => {
    const [show, setShow] = useContext(DialogContext);
    const ref = useRef();

    // 해당 모달 밖을 클릭했을 때, 실행되는 훅
    useEffect(() => {
        const click = () => {
            window.addEventListener('mousedown', checkClick);
        }
        if (show.dialogSubMenu)
            click();
        return () => {
            window.removeEventListener('mousedown', checkClick);
        }
    }, [show.dialogSubMenu]);


    // 외부를 클릭했을 때, 창 닫는 함수
    const checkClick = (e) => {
        if (dialogRef.current.contains(e.target)) {
            e.preventDefault();
        }
        else if (ref.current.contains(e.target)) {
            e.stopPropagation();
        }
        else {
            e.preventDefault();
            setShow.setDialogSubMenu(false);
        }
    }

    if (show.dialogSubMenu)
        return (
            <SubMenuWrapper ref={ref}>
                {
                    subMenuList.map(menu => (
                        <DialogSubSingleItems menu={menu}
                                              submenu={menu.submenu}
                                              key={`DialogSub_${menu.id}`}
                        />
                    ))
                }
            </SubMenuWrapper>
        );
    else
        return null;
}

DialogSubMenu.propTypes = {
    dialogRef: PropTypes.object
}

export default DialogSubMenu;
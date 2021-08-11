import React, {useContext, useEffect, useRef} from 'react';
import DialogContext from "../../../../Context/DialogContext";
import {SubMenuWrapper} from "./DialogSubMenu.styles";
import DialogSubSingleItems from "./DialogSubSingleItems";
import {IoIosContact, IoIosLogOut} from "react-icons/all";

const subMenuList = [
    {
        id : 'mystuff',
        title : 'My Stuff',
        icon : <IoIosContact size={20}/>,
        submenu : [
            {
                id : 'profile',
                title : 'Profile'
            },
            {
                id : 'setting',
                title : 'User Setting'
            }
        ]
    },
    {
        id : 'logout',
        title : 'Log Out',
        icon : <IoIosLogOut size={20}/>
    }
]
const DialogSubMenu = () => {
    const [show, setShow] = useContext(DialogContext);
    const ref = useRef();

    // 해당 모달 밖을 클릭했을 때, 실행되는 훅
    useEffect(() => {
        const click = () => {
            window.addEventListener('mousedown', checkClick);
        }
        click();
        return () => {
            window.removeEventListener('mousedown', checkClick);
        }
    });

    // 외부를 클릭했을 때, 창 닫는 함수
    const checkClick = (e) => {
        if (ref.current && !e.target.contains(ref.current))
            setShow.setDialogSubMenu(false);
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

export default DialogSubMenu;
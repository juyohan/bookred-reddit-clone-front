import React, {useContext, useEffect, useRef} from 'react';
// Context API
import DialogContext from "../../../../Context/DialogContext";
// css
import {SubMenuWrapper} from "./DialogSubMenu.styles";
// Component
import DialogSubSingleItems from "./DialogSubSingleItems";
// Icon
import {IoIosContact, IoIosLogOut} from "react-icons/all";
import PropTypes from "prop-types";

const subMenuList = [
    {
        id: 'mystuff',
        title: 'My Stuff',
        icon: <IoIosContact size={20}/>,
        submenu: [
            {
                id: 'profile',
                title: 'Profile'
            },
            {
                id: 'setting',
                title: 'User Setting'
            }
        ]
    },
    {
        id: 'logout',
        title: 'Log Out',
        icon: <IoIosLogOut size={20}/>
    }
]
const DialogSubMenu = ({dialogRef}) => {
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
    }, []);

    // console.log(svgRef.current);

    // 외부를 클릭했을 때, 창 닫는 함수
    // 외부를 클릭했을 땐, 창이 잘 닫히지만, 해당 아이콘을 2번 클릭했을 땐, 닫히지 않음.
    const checkClick = (e) => {
        e.preventDefault();
        if (e.target === dialogRef.current || e.target === dialogRef.current.firstChild){
            e.stopPropagation();
        }
        else if (ref.current && !e.target.contains(ref.current))
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

DialogSubMenu.propTypes = {
    dialogRef : PropTypes.object
}

export default DialogSubMenu;
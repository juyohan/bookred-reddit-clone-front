import React, {useContext} from 'react';
// css
import {SideBarMenuWrapper} from "./SideBarMenu.styles";
import {AiOutlineRise, BiNews, FaTrophy, MdWhatshot} from "react-icons/all";
// component
import SideMenuSingleItem from "./SideMenuSingleItem";
import GlobalContext from "../../../Context/GlobalContext";

const SideMenuList = [
    {
        id : 'hot',
        title : 'Hot',
        icon : <MdWhatshot/>
    },
    {
        id : 'new',
        title : 'New',
        icon : <BiNews/>
    },
    {
        id : 'rising',
        title : 'Rising',
        icon : <AiOutlineRise/>
    },
    {
        id : 'top',
        title : 'Top',
        icon : <FaTrophy/>
    }
]

const SideBarMenu = () => {
    const [path, setPath] = useContext(GlobalContext);
    const {currentPath, prevPath} = path.router

    let currentType = currentPath;
    if (currentPath === '/')
        currentType  = '/hot'

    return (
        <SideBarMenuWrapper>
            {
                SideMenuList.length > 0 && SideMenuList.map(item => (
                    <SideMenuSingleItem key={`SideMenu_${item.id}`}
                                        item={item}
                                        isActive={currentType === `/${item.id}`}
                    />
                ))
            }
        </SideBarMenuWrapper>
    )
}

export default SideBarMenu;
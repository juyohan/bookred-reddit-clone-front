import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import PropTypes from 'prop-types';
// css
import {Item} from "./HeaderMenu.styles";
// Context API
import DialogContext from "../../../Context/DialogContext";
// Cookie
import {getCookie} from "../../../JwtToken/Cookie";

const HeaderSingleItem = ({item, active}) => {
    const [dialog, setDialog] = useContext(DialogContext);
    const history = useHistory();

    // 해당 토큰이 없으면 렌더링 하지 않고 로그인 화면 나오게
    const onClickCheckToken = (e) => {
        // 알맞는 상단 바 밑에 효과 넣어주기 위함
        // setActive(item.id);
        // home을 클릭하면 메인 페이지로 이동
        if (item.id === '/home') {
            e.preventDefault();
            history.push('/');
        }
        // 토큰이 없으면 렌더링 멈추고 로그인 창 띄우기
        else if (!getCookie('Access-Token')) {
            e.preventDefault();
            setDialog.setAuthDialog(true);
        }
    }

    return (
        <Item to={`${item.id}`}
              isActive={`${active}`}
              onClick={onClickCheckToken}
        >
            {item.title}
        </Item>
    )
}

HeaderSingleItem.propTypes = {
    active: PropTypes.bool,
    item: PropTypes.oneOfType([
        PropTypes.object,
    ]).isRequired,
    // setActive : PropTypes.func
}

export default HeaderSingleItem;
import React, {useContext} from 'react';
import PropTypes from 'prop-types';
// css
import {Item} from "./HeaderMenu.styles";
import Token from "../../../JwtToken/Token";
import DialogContext from "../../../Context/DialogContext";
import {useHistory} from "react-router-dom";

const HeaderSingleItem = ({item, active}) => {
    const [dialog, setDialog] = useContext(DialogContext);
    const history = useHistory();

    // 해당 토큰이 없으면 렌더링 하지 않고 로그인 화면 나오게
    const onClickCheckToken = (e) => {
        if (item.id === 'home') {
            e.preventDefault();
            history.push('/');
        }
        else if (!Token()) {
            e.preventDefault();
            setDialog.setAuthDialog(true);
        }
    }

    return (
        <Item to={`/${item.id}`}
              active={active}
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
}

HeaderSingleItem.defaultProps = {
    active: false,
}

export default HeaderSingleItem;
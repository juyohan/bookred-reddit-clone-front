import React, {useContext} from "react";
import PropTypes from "prop-types";
// css
import {
    ConfirmUserButton,
    ConfirmUserInputPw,
    ConfirmUserTitle,
    ConfirmUserWrapper,
} from "./ConfirmUser.styles";
// Custom Hooks
import useInput from "../../../CustomHooks/useInput";
// Axios
import {API} from "../../../AxiosAPI";
// Context API
import UserContext from "../../../Context/UserContext";

const ConfirmUser = ({setCheck}) => {
    const [user, setUser] = useContext(UserContext);
    const [{pw}, onChangePw, reset] = useInput({
        pw : ''
    });

    const onClickConfirmPw = () => {
        API.User.checkUserPw(pw)
            .then(res => {
                if (res.status === 200) {
                    setCheck(true)
                }
                reset();
            })
            .catch(err => console.log(err));
    }

    return (
        <ConfirmUserWrapper>
            <ConfirmUserTitle>
                <h2>비밀번호 확인</h2>
            </ConfirmUserTitle>
            아이콘
            <p>
                {user.userInfo.username}
            </p>
            <ConfirmUserInputPw
                placeholder={"비밀번호"}
                onChange={onChangePw}
                name={'pw'}
                value={pw}
            />
            <ConfirmUserButton onClick={onClickConfirmPw}>
                확인
            </ConfirmUserButton>
            </ConfirmUserWrapper>
    );
}

ConfirmUser.propTypes = {
    setCheck : PropTypes.func
}

export default ConfirmUser;
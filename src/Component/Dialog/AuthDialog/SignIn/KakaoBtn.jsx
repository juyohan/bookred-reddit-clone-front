import React, {useContext} from 'react';
import KaKaoSymbol from "./symbol.png";
import {BtnWrapper, KaKaoButton, KaKaoImg} from "./KakaoBtn.styles";
import {setCookie} from "../../../../JwtToken/Cookie";
import DialogContext from "../../../../Context/DialogContext";
import {useHistory} from "react-router-dom";
import UserContext from "../../../../Context/UserContext";
import {AUTH_NO_EMAIL_CERTIFICATION} from "../../../../Helper/ErrorMessageList";

const REST_API_KEY = "acc75518d7960814670dead34e92ba88";
const REDIRECT_URI = "http://localhost:3000/kakao/login";

const KakaoBtn = ({setToastMessage, setIsShowing}) => {
    const [show, setShow] = useContext(DialogContext);
    const [state, actions] = useContext(UserContext);
    const history = useHistory();

    const certificationRequest = (e) => {
        e.preventDefault();
        const popupX = (document.body.offsetWidth / 2) - (480 / 2);
        const popupY = (window.screen.height / 2) - (693 / 2);
        // window.location.href = 'https://kauth.kakao.com/oauth/authorize?client_id=acc75518d7960814670dead34e92ba88&redirect_uri=http://localhost:3000/kakao/login&response_type=code';
        // window.open(`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`,
        //     'kakao_pop', 'width=480, height=693, left=' + popupX + ', top=' + popupY);
        // window.open(`/kakao/login`,'_blank');
        // window.open('http://localhost:8080/oauth2/authorization/kakao', '_blank'
        //     , 'width=480, height=693, left=' + popupX + ', top=' + popupY);

        window.location.href = 'http://localhost:8080/oauth2/authorization/kakao';

        window.hello = function (res) {
            const expires = new Date();
            expires.setMinutes(expires.getMinutes() + 60);

            setCookie("Access-Token", res.headers.authorization, {
                path: '/',
                expires: expires,
                secure: true,
            });

            actions.setUserInfo({
                username: res.data
            });

            setShow.setAuthDialog(false);
            window.location.replace("/");
        }

        window.noUserError = function () {
            console.log("401 Error");
        }

        window.noCertiEmail = function () {
            setIsShowing(true);
            setToastMessage(AUTH_NO_EMAIL_CERTIFICATION);
        }
    }

    return (
        <>
            <KaKaoButton type={"button"}
                         onClick={certificationRequest}
                        // onClick={"location.href='http://localhost:8080/oauth2/authorization/kakao'"}
            >
                <BtnWrapper>
                    <KaKaoImg src={KaKaoSymbol}
                              alt={""}
                    />
                    카카오 로그인
                </BtnWrapper>
            </KaKaoButton>
            {/*<a href={"/oauth2/authorization/kakao"}>*/}
            {/*    카카오 로그인*/}
            {/*</a>*/}
        </>
    )
}

export default KakaoBtn;
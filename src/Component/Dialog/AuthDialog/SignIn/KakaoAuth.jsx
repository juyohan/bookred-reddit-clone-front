import React, {useEffect} from 'react';
import {API} from "../../../../AxiosAPI";
import Loader from "react-loader-spinner";

const KakaoAuth = () => {
    const params = new URL(document.location).searchParams;
    const code = params.get("code");

    const getKakaoTokenHandler = (code) => {
        // 서버에 kakao에서 받은 code의 값을 전달
        API.OAuth.postCode(code).then(res => {
            if (res.status === 200) {
                // 서버에서 받아온 사용자의 정보를
                window.opener.hello(res);
                window.close();
            }
        }).catch(err => {
            if (err.response.status === 404) {
                window.opener.noUserError();
            } else if (err.response.status === 401) {
                window.opener.noCertiEmail();
            }
            window.close();
        });
    }

    useEffect(() => {
        if (code) {
            getKakaoTokenHandler(code.toString());
        }
    }, [])

    return (
        <>
            <Loader type={'Oval'}
                    color={'black'}
                    height={40}
                    width={40}
            />

        </>
    )
}

export default KakaoAuth;
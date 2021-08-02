import {useCallback, useReducer, useState} from 'react';
import PropTypes from "prop-types";
// 유효성
import {isEmail, isNickname, isPw} from "../Helper/Regix";
// Axios
import {AuthorAPI} from "../AxiosAPI";

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE' :
            return {
                ...state,
                [action.name]: action.value
            }
        case 'RESET' :
            return Object.keys(state) // 해당 state의 이름을 열거함
                /*
                    예를 들어,
                    const object1 = {
                        a : 'something',
                        b : 42,
                        c : false
                    }
                    라면, a,b,c 가 나온다.
                */
                .reduce((previous, current) => {
                    /*
                     previous : 이전의 값
                     current : 현재 key가 가지고 있는 값
                     const [key, value] = current;
                     */
                previous[current] = '';
                return previous;
            }, {}); // 숫자면 0, 문자면 '', 배열이면 {} 사용한다.
        default :
            return state;
    }
}

function useInput(initialForm, state) {
    const [form, dispatch] = useReducer(reducer, initialForm);
    const [validate, setValidate] = useState({
        email : false,
        nickname : false,
        pw : false
    });

    const {email, nickname} = validate;

    const onChange = useCallback((e) => {
        const blank = /\s/;
        const {name, value} = e.target;

        // 공백 검사
        if (blank.test(value) === true) {
            alert("공백은 사용할 수 없습니다.");
            return;
        }

        // 유효성 검사
        if (state !== 'login') {
            // 이메일 유효성 검사
            if (name === 'email') {
                setValidate({
                    ...validate,
                    email: isEmail(value) // 유효성이 맞다면 true로 변경
                });
                // 만약 유효성이 맞다면 DB에서 같은 값이 있는지 확인
                if (email) {
                    AuthorAPI.checkEmail(value)
                        .then(res => { // 값이 없으면 200 반환
                            if (res.status === 200) {
                                console.log("사용가능");
                            }
                        })
                        .catch(err => { // 값이 있으면 406 반환
                            if (err.response.status === 406) {
                                console.log("이미 있음");
                            }
                        });
                }
            }
            // 닉네임 유효성 검사
            else if (name === 'nickname') {
                setValidate({
                    ...validate,
                    nickname: isNickname(value)
                });
                if (nickname) {
                    AuthorAPI.checkNickname(value)
                        .then(res => {
                            if (res.status === 200) {
                                console.log("사용가능");
                            }
                        })
                        .catch(err => {
                            if(err.response.status === 406)
                                console.log("이미 있음");
                        });
                }
            }
            // 비밀번호 유효성 검사
            else if (name === 'pw') {
                setValidate({
                    ...validate,
                    pw: isPw(value)
                });
            }
        }

        // 입력받기
        dispatch({
            type: 'CHANGE', name, value
        });
    }, [email, nickname, validate, state]);

    // 데이터 삭제하기
    const reset = useCallback(() => dispatch({
        type : 'RESET'
    }),[]);

    return [form, onChange, reset, validate];
}

useInput.propTypes = {
    initialForm : PropTypes.object.isRequired,
    state : PropTypes.string,
}

export default useInput;
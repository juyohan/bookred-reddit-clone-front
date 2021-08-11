import {useCallback, useReducer} from 'react';
import PropTypes from "prop-types";


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

function useInput(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback((e) => {
        const blank = /\s/;
        const {name, value} = e.target;

        // 공백 검사
        if (blank.test(value) === true) {
            alert("공백은 사용할 수 없습니다.");
            return;
        }

        // 입력받기
        dispatch({
            type: 'CHANGE', name, value
        });
    }, []);

    // 데이터 삭제하기
    const reset = useCallback(() => dispatch({
        type : 'RESET'
    }),[]);

    return [form, onChange, reset];
}

useInput.propTypes = {
    initialForm : PropTypes.object.isRequired,
    state : PropTypes.string,
}

export default useInput;
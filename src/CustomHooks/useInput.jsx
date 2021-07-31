import {useState, useCallback} from 'react';

function AuthInput(initialForm) {
    const [value, setValue] = useState(initialForm);
    // const [isShowing, setIsShowing] = useState(false);

    const handler = useCallback((e) => {
        const blank = /\s/;
        if (blank.test(e.target.value) === true) {
            // setIsShowing(true);
            alert("공백은 사용할 수 없습니다.");
            return ;
        }
        setValue(e.target.value)
    },[]);

    return [value, handler, setValue];
}

export default AuthInput;
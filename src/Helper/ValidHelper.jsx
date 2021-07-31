import {useCallback} from "react";

const ValidHelper = (regex, value) => {
    const validateCheck = useCallback((input, regex) => {
        let isValidate = false;
        if (input === false)
            isValidate = false
        else if (regex)
            isValidate = true
    }, [email])
    return validateCheck(input, regex, value);
}
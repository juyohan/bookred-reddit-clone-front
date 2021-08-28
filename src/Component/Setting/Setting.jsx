import {SettingWrapper} from "./Setting.styles";
import {useState} from "react";
import ConfirmUser from "./ConfirmUser";

const Setting = () => {
    const [check, setCheck] = useState(false);

    if (check)
        return (
            <SettingWrapper>

            </SettingWrapper>
        );
    else
        return(
            <ConfirmUser setCheck={setCheck}
            />
        )
}

export default Setting
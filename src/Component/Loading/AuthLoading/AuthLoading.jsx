import React from 'react';
import Loader from 'react-loader-spinner'
import {AuthButton} from "../../Dialog/AuthDialog/AuthDialog.styles";

const AuthLoading = () => {
    return (
        <AuthButton>
            <Loader
                type={'Oval'}
                color={'black'}
                height={30}
                width={30}
            />
        </AuthButton>
    );
}

export default AuthLoading;
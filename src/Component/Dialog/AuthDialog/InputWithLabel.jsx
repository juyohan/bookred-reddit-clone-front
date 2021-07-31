import React from 'react';
import {IWLInput, IWLInputLine, IWLLabel, IWLWrapper} from "./AuthDialog.styles";
import PropTypes from "prop-types";
import {BiLockAlt, HiOutlineMail} from "react-icons/all";

const InputWithLabel = ({ label, name, icon, ...rest}) => (
    <IWLWrapper>
        <IWLLabel>
            {label}
        </IWLLabel>
        <IWLInputLine>
            {
                name === 'email' && icon ?
                    <HiOutlineMail size={25}/>
                    : name === 'pw' && icon ?
                    <BiLockAlt size={25}/> : null
            }
            <IWLInput name={name}
                      {...rest}
            />
        </IWLInputLine>
    </IWLWrapper>
)

InputWithLabel.propTypes = {
    label : PropTypes.string,
    name : PropTypes.string,
    icon : PropTypes.bool,
}

export default InputWithLabel;
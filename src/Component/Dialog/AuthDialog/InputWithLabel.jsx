import React from 'react';
import PropTypes from "prop-types";
import {BiLockAlt, HiOutlineMail} from "react-icons/all";
// css
import {IWLInput, IWLInputLine, IWLLabel, IWLWrapper} from "./AuthDialog.styles";

const InputWithLabel = ({ label, name, icon, ref, ...rest}) => (
    <IWLWrapper>
        <IWLLabel ref={ref}>
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
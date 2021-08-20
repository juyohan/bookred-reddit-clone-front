import React from 'react';
import {CardUserWrapper} from "./CardUser.styles";
import PropTypes from "prop-types";

const CardUser = ({user}) => {
    return (
        <CardUserWrapper>
            {user.username}
        </CardUserWrapper>
    );
}

CardUser.propTypes = {
    user : PropTypes.object,
}

export default CardUser;
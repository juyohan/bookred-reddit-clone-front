import {Cookies} from "react-cookie";
import PropTypes from "prop-types";

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
    return cookies.set(name, value, {...option});
}

setCookie.propTypes = {
    name : PropTypes.string,
    value : PropTypes.string,
    option : PropTypes.any
}

export const getCookie = (name) => {
    if (cookies.get(name) !== undefined) {
        return cookies.get(name);
    }
}

getCookie.propTypes = {
    name : PropTypes.string,
}

export const removeCookie = (name) => {
    return cookies.remove(name);
}

removeCookie.propTypes = {
    name : PropTypes.string,
}
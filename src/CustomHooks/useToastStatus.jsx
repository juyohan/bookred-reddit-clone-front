import {useState, useEffect} from 'react';
import PropTypes from "prop-types";

function useToastStatus(initial) {
    const [isShowing, setIsShowing] = useState(initial);

    useEffect(() => {
        if (isShowing) {
            const notiTimer = setTimeout(() => {
                setIsShowing(false);
            }, 2500);
            return () => clearTimeout(notiTimer);
        }
    }, [isShowing]);

    return [isShowing, setIsShowing];
}

useToastStatus.propTypes = {
    initial : PropTypes.bool,
}

export default useToastStatus;
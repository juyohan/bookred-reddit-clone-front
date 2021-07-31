import {useState, useEffect} from 'react';

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

export default useToastStatus;
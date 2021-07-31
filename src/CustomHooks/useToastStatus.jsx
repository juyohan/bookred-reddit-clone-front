import {useState} from 'react';

function ToastModalView(initial) {
    const [isShowing, setIsShowing] = useState(initial);

    if (isShowing) {
        const timer = setTimeout(() => {
            setIsShowing(false);
        }, 2500);
        return () => clearTimeout(timer);
    }
    return [isShowing, setIsShowing];
}

export default ToastModalView;
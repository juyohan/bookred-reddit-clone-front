import React, {createContext, useState} from 'react';

const DialogContext = createContext({
    state: {
        authDialog : false,
        feedDialog : false,
        dialogSubMenu : false
    },
    actions: {
        setAuthDialog : () => {},
        setFeedDialog : () => {},
        setDialogSubMenu : () => {}
    }
});

const DialogProvider = ({children}) => {
    const [authDialog, setAuthDialog] = useState(false);
    const [feedDialog, setFeedDialog] = useState(false);
    const [dialogSubMenu, setDialogSubMenu] = useState(false);

    const value = {
        state: {authDialog, feedDialog, dialogSubMenu},
        actions: {setAuthDialog, setFeedDialog, setDialogSubMenu}
    };

    return (
        <DialogContext.Provider value={[value.state, value.actions]}>
            {children}
        </DialogContext.Provider>
    );
};


export {DialogProvider}

export default DialogContext;
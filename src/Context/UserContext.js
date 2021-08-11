import React, {createContext, useState} from 'react';

const UserContext = createContext({
    state: {
        userInfo: {},
        isLoading : false,
        error : false,
        isShowing : false
    },
    actions: {
        setUserInfo: () => {},
        setIsLoading : () => {},
        setError : () => {},
        setIsShowing : () => {}
    }
});

const UserProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isShowing, setIsShowing] = useState(false);

    const value = {
        state: {userInfo, isLoading, error, isShowing},
        actions: {setUserInfo, setIsLoading, setError, setIsShowing}
    };

    return (
        <UserContext.Provider value={[value.state, value.actions]}>
            {children}
        </UserContext.Provider>
    );
};

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};

export default UserContext;
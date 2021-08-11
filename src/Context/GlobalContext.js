import {createContext, useState} from 'react';

export const GlobalContext = createContext({
    state: {
        pageParams: {},
        router: {
            currentPath: '/',
            prevPath: '/',
        }
    },
    actions: {
        setPageParams: () => {
        },
        setRouter: {
            setCurrentPath: () => {
            },
            setPrevPath: () => {
            },
        }
    }
});

const GlobalProvider = ({children}) => {
    const [pageParams, setPageParams] = useState({});
    const [router, setRouter] = useState({
        currentPath: '/',
        prevPath: '/'
    });

    const value = {
        state: {pageParams, router},
        actions: {setPageParams, setRouter}
    }

    return (
        <GlobalContext.Provider value={[value.state, value.actions]}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalProvider};

export default GlobalContext;
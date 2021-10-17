import {createContext, useState} from 'react';

const FeedContext = createContext({
    state : {
        feedsInfo : {},
        fetching : false,
        loading : false,
        error : false,
        model : {}
    },
    actions : {
        setFeedsInfo : () => {},
        setFetching : () => {},
        setLoading : () => {},
        setError : () => {},
        setModel : () => {}
    }
});

const FeedProvider = ({children}) => {
    const [feedsInfo, setFeedsInfo] = useState({});
    const [fetching, setFetching] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [model, setModel] = useState({});

    const value = {
        state : {feedsInfo, loading, fetching, error, model},
        actions : {setFeedsInfo, setLoading, setFetching, setError, setModel}
    }

    return (
        <FeedContext.Provider value={[value.state, value.actions]}>
            {children}
        </FeedContext.Provider>
    )
}

const FeedConsumer = FeedContext.Consumer;

export {FeedProvider, FeedConsumer};

export default FeedContext;
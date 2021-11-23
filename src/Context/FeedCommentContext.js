import {createContext, useState} from 'react';

const FeedCommentContext = createContext({
    state : {
        commentsInfo : {},
        fetching : false,
        loading : false,
        error : false,
        model : {}
    },
    actions : {
        setCommentsInfo : () => {},
        setFetching : () => {},
        setLoading : () => {},
        setError : () => {},
        setModel : () => {}
    }
});

const FeedCommentProvider = ({children}) => {
    const [commentsInfo, setCommentsInfo] = useState({});
    const [fetching, setFetching] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [model, setModel] = useState({});

    const value = {
        state : {commentsInfo, loading, fetching, error, model},
        actions : {setCommentsInfo, setLoading, setFetching, setError, setModel}
    }

    return (
        <FeedCommentContext.Provider value={[value.state, value.actions]}>
            {children}
        </FeedCommentContext.Provider>
    )
}

const FeedConsumer = FeedCommentContext.Consumer;

export {FeedCommentProvider, FeedConsumer};

export default FeedCommentContext;
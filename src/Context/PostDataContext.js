import React, {createContext, useState} from 'react';

const PostContext = createContext({
    state: {
        postData : {},
        postType : '',
        drafts : {},
        buttonState : {},
        isLoading : false,
    },
    actions: {
        setPostData : () => {},
        setPostType : () => {},
        setButtonState : () => {},
        setDraft : () => {},
        setIsLoading : () => {},
    }
});

const PostProvider = ({children}) => {
    const [postData, setPostData] = useState({});
    const [PostType, setPostType] = useState('');
    const [drafts, setDrafts] = useState({});
    const [buttonState, setButtonState] = useState({
        draft : true,
        post : true,
    });
    const [isLoading, setIsLoading] = useState(false);

    const value = {
        state: {postData, PostType, drafts, isLoading, buttonState},
        actions: {setPostData, setPostType, setDrafts, setButtonState, setIsLoading}
    };

    return (
        <PostContext.Provider value={[value.state, value.actions]}>
            {children}
        </PostContext.Provider>
    );
};


export {PostProvider}

export default PostContext;
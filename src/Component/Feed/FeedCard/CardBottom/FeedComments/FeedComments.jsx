import React from 'react';
import FeedCommentSingle from "./FeedCommentSingle";
import FeedCommentInput from "./FeedCommentInput";
import {FeedCommentWrapper} from "./FeedComments.styles";

const FeedComments = ({feedKey}) => {
    const list = [
        {
            id: 1,
            username: 'jupaka',
            content: 'hello1'
        },
        {
            id: 2,
            username: 'jupaka',
            content: 'hello2sdfdsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsddsfdslkfjsdlhfjksdhgjflkssdfsdfsddj'
        },
        {
            id: 3,
            username: 'jupaka',
            content: 'hello3asdffasd'
        },
        {
            id: 4,
            username: 'jupaka',
            content: 'hello4asdfsdafdsaf'
        },
    ]

    return (
        <FeedCommentWrapper>
            <FeedCommentInput feedKey={feedKey}/>
            <ul>
                {
                    list.map(item => (
                        <FeedCommentSingle key={item.id}
                                           comment={item}
                        />
                    ))
                }
            </ul>
        </FeedCommentWrapper>
    )
}

export default FeedComments;
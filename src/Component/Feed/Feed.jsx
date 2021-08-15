import React, {useContext, useEffect} from 'react';
import {FeedWrapper} from "./Feed.styles";
import FeedBar from "./FeedBar";
import FeedCard from "./FeedCard";
import FeedContext from "../../Context/FeedContext";
import GlobalContext from "../../Context/GlobalContext";
import {FeedAPI} from "../../AxiosAPI";
import FeedLoading from "../Loading/FeedLoading";

// /hot -> hot 변경
const preTitle = (title) => {
    if (title === '/') {
        return 'hot';
    }
    else {
        return title.split('/')[1];
    }
}

const Feed = () => {
    const [feed, setFeed] = useContext(FeedContext);
    const {feedsInfo, fetching, error, model} = feed;
    const {setFeedsInfo, setFetching, setError, setModel} = setFeed;

    const [path, setPath] = useContext(GlobalContext);

    const params = preTitle(path.router.currentPath);

    useEffect(() => {
        setFetching(true);

        FeedAPI.getFeedData(params).then(res => {
            if (res.status === 200) {
                setFetching(false);
                setError(false);
                setFeedsInfo(res.data);
            }
        }).catch(err => {
            setFetching(false);
            setError(true);
            console.log(err);
        });
    }, [path.router.currentPath]);

    if (fetching)
        return (
            <FeedLoading/>
        )

    if (error)
        return(
            <div>
                에러가 뜸.
            </div>
        )

    return (
        <FeedWrapper>
            <FeedBar params={params}/>
            <FeedCard feedsInfo={feedsInfo}/>
        </FeedWrapper>
    )
}

export default Feed;
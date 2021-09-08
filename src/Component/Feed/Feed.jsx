import React, {useContext, useEffect} from 'react';
// css
import {FeedWrapper} from "./Feed.styles";
// Component
import FeedBar from "./FeedBar";
import FeedCard from "./FeedCard";
import FeedLoading from "../Loading/FeedLoading";
// Context API
import FeedContext from "../../Context/FeedContext";
import GlobalContext from "../../Context/GlobalContext";
// Axios
import {FeedAPI} from "../../AxiosAPI";
import {getCookie} from "../../JwtToken/Cookie";

// '/hot' -> 'hot' 으로 변경
const preTitle = (title) => {
    // '/' 홈은 hot으로 분류해야하기 때문
    if (title === '/') {
        return 'hot';
    } else {
        return title.split('/')[1];
    }
}

const Feed = () => {
    const [feed, setFeed] = useContext(FeedContext);
    const {feedsInfo, fetching, error, model} = feed;
    const {setFeedsInfo, setFetching, setError, setModel} = setFeed;

    const [path, setPath] = useContext(GlobalContext);

    const params = preTitle(path.router.currentPath);
    const feedParams = ["hot", "new", "rising", "top"];

    // url이 바뀔 때 마다, 피드의 정보를 가져옴
    useEffect(() => {
        if (feedParams.includes(params)) {
            setFetching(true);

            FeedAPI.getFeedData(params).then(res => {
                if (res.status === 200) {
                    setFetching(false);
                    setError(false);
                    setFeedsInfo(res.data.data);
                    console.log(res.data.data);
                }
            }).catch(err => {
                setFetching(false);
                setError(true);
                console.log(err);
            });
        }
    }, [params]);

    if (fetching)
        return (
            <FeedLoading/>
        )

    if (error)
        return (
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
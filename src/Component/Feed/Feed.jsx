import React, {useContext, useEffect, useState} from 'react';
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
import {API} from "../../AxiosAPI";

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

    const {feedsInfo, loading, fetching, error, model} = feed;
    const {setFeedsInfo, setLoading, setFetching, setError, setModel} = setFeed;

    const [pageNum, setPageNum] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const [path, setPath] = useContext(GlobalContext);

    const params = preTitle(path.router.currentPath);
    const feedParams = ["hot", "new", "rising", "top"];

    // url이 바뀔 때 마다, 피드의 정보를 가져옴
    useEffect(() => {
        if (feedParams.includes(params)) {
            setLoading(true);
            setPageNum(1);
            setFeedsInfo({});

            API.FeedData.getFeedData(params, 0).then(res => {
                if (res.status === 200) {
                    setLoading(false);
                    setError(false);
                    setFeedsInfo(res.data.data);
                    setTotalPage(res.data.totalPage);
                }
            }).catch(err => {
                setLoading(false);
                setError(true);
                console.log(err);
            });
        }

    }, [params]);

    /**
     * document.element 를 이용한 무한 스크롤링
     **/
     useEffect(() => {
        const scrollEvent = () => window.addEventListener('scroll', handleScroll);
        scrollEvent();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

     const fetchMoreFeedData = () => {
        setFetching(true);

        if (feedParams.includes(params)) {
            API.FeedData.getFeedData(params, pageNum).then(res => {
                if (res.status === 200) {
                    setFetching(false);
                    setError(false);
                    const next = res.data.data;
                    const mergeData = feedsInfo.concat(...next);
                    setFeedsInfo(mergeData);
                    setPageNum(pageNum + 1);
                }
            }).catch(err => {
                setFetching(false);
                setError(true);
                console.log(err);
            })
        }
        setFetching(false);
    }

     const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight - 50 && !fetching) {
            if (pageNum < totalPage)
                fetchMoreFeedData();
        }
    }


    if (loading)
        return (
            <FeedWrapper>
                <FeedLoading/>
            </FeedWrapper>
        )

    if (error)
        return (
            <FeedWrapper>
                <div>
                    에러가 뜸.
                </div>
            </FeedWrapper>
        )

    return (
        <FeedWrapper>
            <FeedBar params={params}/>
            <FeedCard feedsInfo={feedsInfo}/>
        </FeedWrapper>
    )
}

export default Feed;
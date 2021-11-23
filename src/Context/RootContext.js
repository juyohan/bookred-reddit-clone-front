import {UserProvider} from "./UserContext";
import {FeedProvider} from "./FeedContext";
import {GlobalProvider} from "./GlobalContext";
import {DialogProvider} from "./DialogContext";
import {PostProvider} from "./PostDataContext";
import {FeedCommentProvider} from "./FeedCommentContext";

export const RootProvider = ({children}) => {
    return (
        <UserProvider>
            <FeedProvider>
                <GlobalProvider>
                    <DialogProvider>
                        <PostProvider>
                            <FeedCommentProvider>
                                {children}
                            </FeedCommentProvider>
                        </PostProvider>
                    </DialogProvider>
                </GlobalProvider>
            </FeedProvider>
        </UserProvider>
    );
};


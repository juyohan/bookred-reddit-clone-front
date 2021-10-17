import {UserProvider} from "./UserContext";
import {FeedProvider} from "./FeedContext";
import {GlobalProvider} from "./GlobalContext";
import {DialogProvider} from "./DialogContext";
import {PostProvider} from "./PostDataContext";

export const RootProvider = ({children}) => {
    return (
        <UserProvider>
            <FeedProvider>
                <GlobalProvider>
                    <DialogProvider>
                        <PostProvider>
                            {children}
                        </PostProvider>
                    </DialogProvider>
                </GlobalProvider>
            </FeedProvider>
        </UserProvider>
    );
};


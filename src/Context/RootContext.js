import {UserProvider} from "./UserContext";
import {FeedProvider} from "./FeedContext";
import {GlobalProvider} from "./GlobalContext";
import {DialogProvider} from "./DialogContext";

export const RootProvider = ({children}) => {
    return (
        <UserProvider>
            <FeedProvider>
                <GlobalProvider>
                    <DialogProvider>
                        {children}
                    </DialogProvider>
                </GlobalProvider>
            </FeedProvider>
        </UserProvider>
    );
};


import React, {useContext} from "react";
// css
import {FeedDialogWrapper} from "./FeedDialog.styles";
// Context API
import DialogContext from "../../../Context/DialogContext";

const FeedDialog = () => {
    const [dialog, setDialog] = useContext(DialogContext);

    if (dialog.feedDialog)
        return (
            <FeedDialogWrapper>
            </FeedDialogWrapper>
        );
    else
        return null;
}

export default FeedDialog;
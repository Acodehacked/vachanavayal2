'use client'

import { useState } from "react";
import SnackbarContext from "./Snackbar-context";

export const SnackbarContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [msg, setmsg] = useState("test");
    const [isDisplayed, setisDisplayed] = useState(false);
    var timer: NodeJS.Timeout;
    const displayHandler = (msg: string) => {
        setmsg(msg);
        if (!isDisplayed) {
            setisDisplayed(true);
            timer = setTimeout(() => {
                closeHandler();
            }, 3000);
        }else{
            clearTimeout(timer);
            timer = setTimeout(() => {
                closeHandler();
            }, 3000);
        }



    }
    const closeHandler = () => {
        clearTimeout(timer);
        setisDisplayed(false);
    }

    return (
        <SnackbarContext.Provider value={{ msg, isDisplayed, displayMsg: displayHandler, onClose: closeHandler }} >{children}</SnackbarContext.Provider>
    );
}
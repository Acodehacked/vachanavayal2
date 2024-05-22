'use client'
import React from "react";

const SnackbarContext = React.createContext({
    msg : '',
    isDisplayed: false,
    displayMsg: (msg:string) => {},
    onClose: ()=>{}
});
export default SnackbarContext;


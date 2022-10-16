import { createContext, useState } from "react";

export const appContext = createContext();

const Context = ({children}) => {

    const [ currency , setCurrency ] = useState("INR");

    return (
        <appContext.Provider value={{currency, setCurrency}}>{children}</appContext.Provider>
    )
}

export default Context;
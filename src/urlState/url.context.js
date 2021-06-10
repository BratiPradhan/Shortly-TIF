import { createContext, useContext, useReducer } from "react";
import { reducer } from "./url.reducer";

const UrlContext = createContext();

const initialData = {
    urls: JSON.parse(localStorage?.getItem('urls')) || []
}

export const UrlProvider = ({ children }) => {
    const [{ urls }, dispatch] = useReducer(reducer, initialData)
    return (
        <UrlContext.Provider value={{urls, dispatch}}>
            { children }
        </UrlContext.Provider>
    )
}

export const useUrl = () => useContext(UrlContext);
import {   createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer"


const  initialState ={
    darkMode: true
}

export const DarkModeContext  =  createContext(initialState)

export const DarkModeContextProvider = ({children}) => {
       const [State, dispatch]  = useReducer(DarkModeReducer, initialState);

       return (
         <DarkModeContext.Provider value={{ darkMode: State.darkMode, dispatch}}>{children}</DarkModeContext.Provider>
       )
}

import React,{createContext,useState} from 'react';

export const StateContext=createContext();

export const StateProvider = ({children})=>{
    const[Name,updateName]=useState({});
    return <StateContext.Provider value={[Name,updateName]}>
        {children}
    </StateContext.Provider>
}


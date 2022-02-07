import React, { createContext, useReducer } from 'react'


const initialState = ' '

const reducer = (state , action) =>{
    switch (action.type) {
        case "Translate":
            state = action.value
            return state
        case "clear":
            state = ' '
            return state
        default:
            break;
    }
}


export const TranslateContext = createContext();

export default function TranslateContextProvider(props) {
    const [Resault , dispatch] = useReducer(reducer , initialState)
    return (
        <>
            <TranslateContext.Provider value={ {Resault , dispatch} }>
                {props.children}
            </TranslateContext.Provider>
        </>
    )
}


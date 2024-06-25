import React, {createContext, useReducer, useContext} from 'react'

//creating the context in a variable
const searchContext = createContext();

//create a variable showing the initial state or search value
const initialState = {
    searchValue: '',
};

//declare a callback function using state and action as the properties
const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_SEARCH_TERM':
            return{...state, searchValue: action.payload}
            defalut:
            return state
    }
}

//providing context to the children with the dispatch function to trigger state
export const SearchProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState)
    return(
        <searchContext.Provider value={{state,dispatch}}>
            {children}
            </searchContext.Provider>
            
    )
}

export const useSearch = () => useContext(searchContext)
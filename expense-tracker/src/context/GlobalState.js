import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

//init state


const initialState = {
    transactions : [
        {id: 1, text: "Book", amount: -20},
        {id: 2, text: "Camera", amount: 2000},
        {id: 3, text: "Salary", amount: 90000},
        {id: 4, text: "Salary_1", amount: -9000},
        {id: 5, text: "Salary_2", amount: 700},
        {id: 6, text: "Salary_3", amount: -300},
        {id: 7, text: "Salary_4", amount: -6000}
    ],
    t:{
        id:1,
        username:"y",
        password:"y123"
    }
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    
    function deleteTransactionById(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addNewTransactionBy(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return <GlobalContext.Provider value={{transactions: state.transactions, 
                                           deleteTransactionById,
                                           addNewTransactionBy  
                                    }}
            >
                {children}
            </GlobalContext.Provider>
}
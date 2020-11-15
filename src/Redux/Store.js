import {createStore} from "redux"
import Reducer from "./Reducer"


const initialState = {
    name:"John"
}

export const store  = createStore(
    Reducer,
    initialState
)
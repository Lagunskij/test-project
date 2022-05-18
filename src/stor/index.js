import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./reducers/tasksReducers";
import {todolistsReducer} from "./reducers/todolistReducer";

const rootReducer = combineReducers(
    {
        tasks: tasksReducer,
        todolists: todolistsReducer
    }
)

export const store = createStore(rootReducer);

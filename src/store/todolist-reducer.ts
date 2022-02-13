
import {TodolistType} from "../App";

type RemoveTodolistAT={
    type: "REMOVE-TODOLIST"
    id:string
}

export type ActionType=RemoveTodolistAT
export const todolistsReducer=(Todolists: Array<TodolistType>, action: ActionType):Array<TodolistType>=>{
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return Todolists
        default:
            return Todolists

    }
}

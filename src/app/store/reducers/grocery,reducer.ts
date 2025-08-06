import { createReducer } from "@ngrx/store"
import {Grocery} from "../../../models/grocery.model";

const intialState:Grocery[] = [
    {
        id: 1,
        name: 'Milk',
        type: 'dairy',
    },
    {
        id: 2,
        name: 'Banana',
        type: 'fruit',
    },
    {
        id: 3,
        name: 'Paneer',
        type: 'dairy',
    }

]

export const groceryReducer = createReducer(intialState)
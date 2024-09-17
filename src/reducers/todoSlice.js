import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState;



if(localStorage.getItem("todos") && localStorage.getItem("todos").length !== 0){
    initialState = {
        todos: JSON.parse(localStorage.getItem("todos"))
    }   
}else {
    initialState = {
        todos: []
    }
    localStorage.setItem("todos", [])
}



export const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
                // editable: false
            }
            state.todos.push(newTodo);
        },
        editTodo: (state, action) => {
            let selectedTodoIndex = state.todos.findIndex(item => item.id === action.payload.id);
            const editedTodo = {
                id: action.payload.id,
                text: action.payload.text,
                // editable: action.payload.editable
            }
            state.todos.splice(selectedTodoIndex, 1, editedTodo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload);
        }
    }
})

export const {addTodo, editTodo, removeTodo} = todoSlice.actions; 

export default todoSlice.reducer;

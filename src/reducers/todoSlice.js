import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id:nanoid(), text: "Hello"}]
}

export const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(newTodo);
        },
        editTodo: (state, action) => {
            let selectedTodoIndex = state.todos.indexOf(item => item.id === action.payload.id);
            const editedTodo = {
                id: action.payload.id,
                text: action.payload.text
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

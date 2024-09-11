import { autoBatchEnhancer } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

const TodoList = ({...props}) => {
    const todoList = useSelector(state => state.todos);    
    return (
        <div>
            {todoList.map((item, ind) => 
                <TodoListItem key={item.id} index={ind} id={item.id} text={item.text}></TodoListItem>
            )}
        </div>
    )
}

export default TodoList;
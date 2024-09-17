import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import { addTodo } from "../reducers/todoSlice";



const TodoList = ({...props}) => {
    const dispatch = useDispatch();
    const [searchVal, setSearchVal] = useState("");
    const todoList = useSelector(state => state.todos);    
    localStorage.setItem("todos", JSON.stringify(useSelector(state => state.todos)))

    useEffect(() => {
        const input = document.getElementById("inputId");
        input.addEventListener("keyup", (e) => {
            if(e.key === "Enter"){
                const button = document.getElementById("addTodoBtnId");
                e.preventDefault();
                button.click()
            }
        })
    },[])

    const onChangeOfInput = (e) => {
        const inputText = e.target.value;
        setSearchVal(inputText);
    }

    const onClickAddTodo = (e) => {
        if(searchVal !== ""){
            dispatch(addTodo(searchVal));
            setSearchVal("");
        }
    }
    return (
        <div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <div>
                    <input placeholder="Enter a new Todo..." style={{margin:"8px"}} id="inputId" onChange={(e) => onChangeOfInput(e)} type="text" value={searchVal}></input>
                </div>
                <button style={{margin:"8px"}} id="addTodoBtnId" onClick={(e)=> onClickAddTodo(e)}>Add Todo</button>
            </div>
            {todoList.map((item, ind) => 
                <TodoListItem key={item.id} index={ind} id={item.id} text={item.text}></TodoListItem>
            )}
        </div>
    )
}

export default TodoList;
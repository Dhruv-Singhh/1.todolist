import React from "react";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../reducers/todoSlice";
import PropTypes from 'prop-types';



const TodoListItem = ({index, id, text}) => {
    const dispatch = useDispatch();

    const onClickDelete = (e, id) => {
        dispatch(removeTodo(id));
    }

    const onChangeofInput = (e, id) => {
        const inputText = e.target.value;
        const payload = {
            id: id,
            text: inputText
        }
        dispatch(editTodo(payload))
    }

    return (
        <div style={{display:"block", }}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <div style={{margin:"8px"}}>
                    {index+1}. 
                </div>
                <div>
                    <input style={{margin:"8px"}} onChange={(e) => onChangeofInput(e, id)} type="text" value={text}></input>
                </div>
                <button style={{margin:"8px"}} onClick={(e)=> onClickDelete(e, id)}>Delete</button>
            </div>
        </div>
    )
} 

TodoListItem.propTypes = {
    index: PropTypes.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default TodoListItem;
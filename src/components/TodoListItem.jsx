import React from "react"


const TodoListItem = ({index, id, text}) => {
    return (
        <div style={{display:"block", }}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <div style={{marginRight:"0.5rem"}}>
                        {index+1}. 
                    </div>
                    <div>
                        {text}
                    </div>
                </div>
        </div>
    )
} 

export default TodoListItem;
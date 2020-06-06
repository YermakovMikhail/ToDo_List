import React from "react"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import useInputState from "./hooks/useInputState"

function TodoForm({addTodo}){
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper style ={{margin:"10pix 0" , padding: "0 10px"}}>
            <form onSubmit={e=> {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
                <TextField value={value} onChange = {handleChange} margin="normal" label ="Add New Todo" fullWidth/>
            </form>
        </Paper>
    )

}
export default TodoForm;
import React, {useState} from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core"
import TodoList from "./TodoList"
function TodoApp(){
    const initialTodos = [
        {id: 1, task: "Wake up", complited: false},
        {id: 2, task: "Have breakfast", complited: false},
        {id: 3, task: "Take a shower", complited: false}
    ]
    const [todos, setTodos] = useState(initialTodos);
    return(
        <Paper
            style ={{
                padding:0,
                margin:0,
                height: "100px",
                backgroundColor:"#fafafa"}}
            elevation = {0}>
            <AppBar color='primary' position = 'static' style ={{height:"64px"}}>
                <Toolbar>
                    <Typography color='inherit'> TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <TodoList todos={todos}/>
        </Paper>
    )
}
export default TodoApp;
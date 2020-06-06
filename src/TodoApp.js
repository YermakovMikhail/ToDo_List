import React, {useState} from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
// import {v4 as uuidv4} from "uuid"
function TodoApp(){
    const initialTodos = [
        {id: 1, task: "Wake up", completed: false},
        {id: 2, task: "Have breakfast", completed: true},
        {id: 3, task: "Take a shower", completed: false}
    ]
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos,{id:4, task: newTodoText, completed: false}]);
    };
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
            <Grid container justify = "center" style={{marginTop: "20px"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm  addTodo = {addTodo}/>
                    <TodoList todos={todos}/>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default TodoApp;
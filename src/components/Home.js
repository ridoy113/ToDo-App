import React, { useState } from 'react'
import Todos from './Todos';
import style from './home.module.css'
import NewTodo from './NewTodo';




const Home = () => {

    const [todos, setTodos] = useState([])

    const handelAddTodo = (todo) => {
        setTodos((prevTodos)=>{
            return[...prevTodos, {todo}]
        })
    }

    return (
        <div className={style.container}>
            <h1 style={{ color: "white" }}>Todo App</h1>
            <NewTodo onAddTodo={handelAddTodo} />
            <Todos todos={todos} />
        </div>
    )
}

export default Home
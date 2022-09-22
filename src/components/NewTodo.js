import React from 'react';
import style from './newtodo.module.css';




const NewTodo = () => {
    return (
        <form className={style.form}>

            <div>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" />
            </div>

            <div>
                <label htmlFor="desc">Title: </label>
                <textarea type="text" name="desc" id="desc" />
            </div>

            <button type='submit'>Add Todo</button>

        </form>
    )
}

export default NewTodo
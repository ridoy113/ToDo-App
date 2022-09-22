import React from 'react';
import style from './newtodo.module.css';




const NewTodo = () => {
    return (
        <form className={style.form}>

            <div className={style["form-field"]}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" />
            </div>

            <div className={style["form-field"]}>
                <label htmlFor="desc">Description: </label>
                <textarea type="text" name="desc" id="desc" />
            </div>

            <button type='submit'>Add Todo</button>

        </form>
    )
}

export default NewTodo
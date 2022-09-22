import React from 'react'

const NewTodo = () => {
    return (
        <form>

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
import React, {useState} from 'react';
import TodoForm from './TodoForm';
import {BsFillTrashFill} from 'react-icons/bs'
import {BiEdit} from 'react-icons/bi'

function Todo({todos, completeTodo, removeTodo, updateTodo}){
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value: ''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                <div className='todoListItem'key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.item}
                </div>
                <div>
                    {todo.date}
                </div>
                <div className="icons">
                <BiEdit onClick={() => setEdit({id: todo.id,value: todo.item})} className='edit-icon'/>
                <BsFillTrashFill onClick={() => removeTodo(todo.id)} className='delete-icon'/>
                </div>
               

        </div>
    ))
}

export default Todo
 import React, {useState,useEffect,useRef} from 'react';

 function TodoForm(props){
    const [item, setItem] = useState([props.edit ? props.edit.value :''])
    const [date, setDate] = useState([])

    const inputRef = useRef(null)
    
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleItemChange = e => {
        setItem(e.target.value)
    }

    const handleDateChange = e => {
        setDate(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({item, date, id: Date.now(), key:Date.now(), completed:false });
        setItem('')
        setDate('')
        
    }

    return(
        <div className='todo-wrapper'>
            <form className = 'todo-form' onSubmit={handleSubmit}>
                {props.edit ? (
            <fieldset>
                <input 
                type='text'
                placeholder="Update your item" 
                value={item}
                name='text'
                className='todo-item edit'
                onChange={handleItemChange}
                ref={inputRef}
                />

                <input 
                type='date'
                value={date}
                name='date'
                className='todo-date edit'
                onChange={handleDateChange}
                />

                <button className='todo-button edit'>Update</button>
            </fieldset>
            ) : (
                <fieldset>
                <input 
                type='text'
                placeholder="Add an item" 
                value={item}
                name='text'
                className='todo-item'
                onChange={handleItemChange}
                ref={inputRef}
                />

                <input 
                type='date'
                value={date}
                name='date'
                className='todo-date'
                onChange={handleDateChange}
                />

                <button className='todo-button'>Add</button>
            </fieldset>
            )}
            </form>

        </div>
    )
}

 export default TodoForm
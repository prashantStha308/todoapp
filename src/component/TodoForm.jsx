import { useState } from 'react'



export function TodoForm({onSubmit}){
    const [newItem , setNewItem] = useState("")

    function handelSubmit(e){
        e.preventDefault()    
        if(newItem === "")return

        onSubmit(newItem)

        setNewItem("")
    }


    return(
        <form onSubmit={handelSubmit} className='new-item-form'>
            <div className="form-row">
                <label htmlFor="item">New Item :</label>
                <input value={newItem} onChange={e=>setNewItem(e.target.value)} type="text" id="item" />
            </div>
            <button className="btn">Add Task</button>
        </form>
    )
}
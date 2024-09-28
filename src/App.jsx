import { useEffect, useState } from 'react'
import './index.css'
import { TodoForm } from './component/TodoForm'
import { TodoList } from './component/TodoList'

export default function App() {

  
  const [todos,setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS");
    if(localValue == null) return[]

    return JSON.parse(localValue)
  })

  // useEffect() runs the function inside it every time there is a change in the second arguement, here [todos]. So, when there is any change made in [todos], the function inside useEffect runs

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])

  function addTodo(title){
    setTodos( currentTodo=>{
      return[
        ...currentTodo,{id: crypto.randomUUID(), title , completed: false}
      ]
    } )
  }

  console.log(todos);

  function toggleTodo( id , completed ){
    setTodos( currentTodo =>{
      return currentTodo.map( todo=>{
        if(todo.id === id){
          return{ ...todo, completed }
        }
        return todo;
      } )
    } )
  }

  function deleteTodo(id){
    setTodos( currentTodo=>{
      return currentTodo.filter( todo=>todo.id !== id )
    } )
  }

  return(
    <section className='app' >
      <TodoForm onSubmit={addTodo}/>
      <section className="todo-section">
        <h1 className="header">Todo list</h1>
        <TodoList todo={todos}  deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      </section>
    </section>
  )
}
import { TodoItem } from './TodoItem'

export function TodoList({todo , deleteTodo , toggleTodo}){

    return(
        <ul className="list">
            {todo.length === 0 && "No todos"}
            {todo.map((todo)=>{
            return(
                <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            )
            })}
      </ul>
    )
}
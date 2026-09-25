
    import React from 'react'
    import { useState } from 'react'
    import Input from './Input'
    import Button from './Button'
    import DeleteTodo from './DeleteTodo'

    function AddTodo() {
          
    //setTodos and state concept clear
        const [todos, setTodos] = useState([])
        const [todo, setTodo] = useState("")

        const addTodo = (e) => {  
            e.preventDefault();       
            setTodos((prev) => [
            ...prev,
            {
                id: Date.now(),
                todo: todo,
            }
            ])
             setTodo('')
        }
        const deleteTodo = (id) => {
            setTodos(todos.filter((todos) => todos.id !== id))
        }
        const editTodo = (id, updatedTodo) => {
    setTodos((prev) => 
        prev.map((todo) => 
            todo.id === id ? { ...todo, todo: updatedTodo } : todo
        )
    )
}

        return (
            <div>
                <form onSubmit={addTodo}>
                <Input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                
                />
                <Button
                type="submit"/>
                </form>
                {/* phir bhool gya agr arrow function k baad curly braces use krni hain to return krna hai nai to dosri braces use kren */} 
                {todos.map((todo) => (
                    <DeleteTodo
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteTodo}
                        onEdit={editTodo}
                    />
                ))}

            </div>
        )
    }

    export default AddTodo

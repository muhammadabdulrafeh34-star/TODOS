// delete and ediit/

import React, { useState } from 'react'

function DeleteTodo({ todo, onDelete, onEdit }) {
  const [isEditable, setIsEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)

  return (
    <li>
        <input 
            type="text"
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            disabled={!isEditable} // Jab tak edit on na ho, input disable rahe
        />
        
        {/* Edit / Save Button */}
        <button 
            onClick={() => {
                if (isEditable) {
                    onEdit(todo.id, todoMsg); // Save kar do
                }
                setIsEditable((prev) => !prev); // Toggle karo
            }}
        >
            {isEditable ? "📁 Save" : "✏️ Edit"}
        </button>

        {/* Delete Button */}
        <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  )
}

export default DeleteTodo
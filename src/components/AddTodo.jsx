import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'
function AddTodo({setSearchQuery}) {

  const [text, setText] = useState("")
  const [description, setDescription] = useState("");
  const dispatch = useDispatch()

  // Handle form submission for adding or updating todos
  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo({ text, description }));
    setText('')
    setDescription("");
}


  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
      <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Description"
      />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search tasks"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
       {"Add Todo"}
    </button>
  </form>
  )
}

export default AddTodo
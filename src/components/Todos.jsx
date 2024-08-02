import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo, updateTodo, toggleComplete} from '../features/todo/todoSlice'
import AddTodo from './AddTodo'
function Todos() {
  const todos = useSelector(state => state.todos)
  const [expandTodo, setExpandTodo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isTodoEditable, setIsTodoEditable] = useState(null);
  const [todoMsg, setTodoMsg] = useState("");
  const [descriptionMsg, setDescriptionMsg] = useState("");
  const dispatch = useDispatch();

  const handleTodoClick = (id) => {
    const selectedTodo = todos.find(todo => todo.id === id);
    if (expandTodo === id) {
      setExpandTodo(null);
      // console.log("expand");
    } else {
      setExpandTodo(id);
      // console.log("setexpand")
    }
    if (isTodoEditable !== id) {
      setTodoMsg(selectedTodo.text);
      setDescriptionMsg(selectedTodo.description);
    }
  };
  const filteredTodos = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleEdit =  (todo) => {
    dispatch(updateTodo({
      id: todo.id,
      text: todoMsg,
      description: descriptionMsg
    }));
    setExpandTodo(null);
    setIsTodoEditable(null);
  };
  const handleToggleComplete = (e, id) => {
    e.stopPropagation();
    // console.log(id);
    dispatch(toggleComplete(id));
  }
return (
  <>
  <AddTodo setSearchQuery={setSearchQuery}/>
  <ul className="list-none">
      {filteredTodos.map((todo) => (
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          key={todo.id}
          onClick={() => handleTodoClick(todo.id)}
        >
          <input
              type="checkbox"
              className="cursor-pointer mr-3 px-1 py-1"
              checked={todo.completed}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => handleToggleComplete(e, todo.id)}
          />
            <div className="flex-1 flex flex-col">
            <input
                type="text"
                className={`border outline-none w-full rounded-sm ${
                  isTodoEditable === todo.id
                    ? "bg-blue-100 border-blue-500" // Change background when editing
                    : "bg-transparent text-white border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={isTodoEditable === todo.id ?todoMsg : todo.text}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={isTodoEditable !== todo.id}
              />
               {expandTodo === todo.id && (
                  isTodoEditable === todo.id ? (
                    <textarea
                      className={`border outline-none w-full mt-2 rounded-sm ${
                        isTodoEditable === todo.id
                          ? "bg-blue-100 border-blue-500"
                          : "bg-transparent text-white border-transparent"
                      }`}
                      value={descriptionMsg}
                      onChange={(e) => setDescriptionMsg(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <div className="text-gray-400 text-sm mt-2 ml-0">
                      {todo.description} Last Updated: {new Date(todo.lastUpdated).toLocaleString()}
                    </div>
                  )
                )}
            </div>
          <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 ml-auto mr-2"
                onClick={(e) => {
                  e.stopPropagation();
                  if (todo.completed) return;

                  if (isTodoEditable === todo.id) {
                    handleEdit(todo);
                  } else {
                    setIsTodoEditable(todo.id);
                    setTodoMsg(todo.text);
                  }
                }}
                disabled={todo.completed}
              >
                {isTodoEditable === todo.id ? "📁" : "✏️"}
              </button>
          <button
           onClick={(e) =>{ 
            e.stopPropagation();
            dispatch(removeTodo(todo.id))
          }}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  </>
)
}

export default Todos
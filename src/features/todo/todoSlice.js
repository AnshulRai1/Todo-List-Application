import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: []
}

// Fetch todos from JSON file
const fetchTodos = async () => {
    try {
        const response = await fetch('/todos.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        return [];
    }
}

// Fetch todos and update initial state
const fetchInitialState = async () => {
    const todos = await fetchTodos();
    return {
        todos: todos
    };
}


export const todoSlice = createSlice({
    name:"todo",
    initialState: await fetchInitialState(),
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text,
                description: action.payload.description,
                completed: false,
                lastUpdated: new Date().toISOString()
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id!== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text, description } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
              existingTodo.text = text;
              existingTodo.description = description;
              todo.lastUpdated = new Date().toISOString();
            }
          },
        toggleComplete: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if(todo){
                todo.completed = !todo.completed;
                todo.lastUpdated = new Date().toISOString();
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo, toggleComplete} = todoSlice.actions

export default todoSlice.reducer
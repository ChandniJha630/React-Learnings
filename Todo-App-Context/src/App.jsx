import React, { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import { TodoForm, TodoItems } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodos)=>(prevTodos.id===id?todo:prevTodos)))
  }


  const deleteTodo=(id)=>{
    //create a new todo with todos whose id isnot equal to id
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id)) 
  } 

  const toggleComplete =(id) =>{
    setTodos((prev)=>prev.map((prevTodos)=>prevTodos.id ===id ? {...prevTodos, completed:!prevTodos.completed}: prevTodos))
  }

  //grabbing todos from local storage run once
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length >0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItems todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App

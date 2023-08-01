import { useSelector } from 'react-redux'
import { useTodos } from './hooks/useTodos'
import { useState } from 'react'

import TodoCard from './components/TodoCard'
import ModalTodo from './components/Modal'
import DarkMode from './components/DarkMode'
import Filter from './components/Filter'

function App () {
  const todos = useSelector((state) => state.todos)
  const { handleDelete, handleAdd, handleUpdateStatus } = useTodos()

  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(false)

  const filteredTodos = filter === 'all'
    ? todos
    : filter === 'completed'
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed)

  return (
    <main className='flex flex-col items-center'>

      <DarkMode />
      <Filter filter={filter} setFilter={setFilter} setOpen={setOpen} />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10'>
        {
          filteredTodos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} onDelete={handleDelete} onComplete={handleUpdateStatus} />
          ))
        }
      </div>

      <ModalTodo open={open} setOpen={setOpen} onToggle={handleAdd} />
    </main>
  )
}

export default App

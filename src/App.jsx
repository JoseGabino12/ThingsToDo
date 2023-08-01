import { useSelector } from 'react-redux'
import { useTodos } from './hooks/useTodos'
import { Selector } from '@rewind-ui/core'
import { useState } from 'react'

import TodoCard from './components/TodoCard'

function App () {
  const todos = useSelector((state) => state.todos)
  const { handleDelete } = useTodos()

  const [filter, setFilter] = useState('all')

  const filteredTodos = filter === 'all'
    ? todos
    : filter === 'completed'
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed)

  return (
    <main className='flex flex-col items-center'>

      <section className='w-80 md:w-1/2 mt-10'>

        <Selector value={filter} fullWidth onChange={(value) => setFilter(value)}>
          <Selector.Tab label='All' anchor='all' />
          <Selector.Tab label='Completed' color='green' anchor='completed' />
          <Selector.Tab label='Not completed' color='blue' anchor='not-completed' />
        </Selector>
      </section>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10'>
        {
          filteredTodos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} onToggle={handleDelete} />
          ))
        }
      </div>
    </main>
  )
}

export default App

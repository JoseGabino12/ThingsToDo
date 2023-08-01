import { useDispatch } from 'react-redux'
import { deleteTodo, addTodo, updateTodo, updateTodoStatus } from '../store/todos/slice'

export const useTodos = () => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleAdd = (todo) => {
    dispatch(addTodo({
      id: Math.floor(Math.random() * 1000),
      ...todo
    }))
  }

  const handleUpdate = (todo) => {
    dispatch(updateTodo({
      ...todo
    }))
  }

  const handleUpdateStatus = (id, completed) => {
    dispatch(updateTodoStatus({
      id,
      completed
    }))
  }

  return {
    handleDelete,
    handleAdd,
    handleUpdate,
    handleUpdateStatus
  }
}

import { useDispatch } from 'react-redux'
import { deleteTodo } from '../store/todos/slice'

export const useTodos = () => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  return {
    handleDelete
  }
}

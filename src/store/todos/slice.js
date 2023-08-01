import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    title: 'Learn Redux',
    completed: false,
    description: 'Learn Redux with React and Redux Toolkit'
  },
  {
    id: 2,
    title: 'Learn React',
    completed: true,
    description: 'Learn React with Redux and Redux Toolkit'
  },
  {
    id: 3,
    title: 'Create a new project with Next.js',
    completed: false,
    description: 'Learn Redux Toolkit with React and Redux'
  },
  {
    id: 4,
    title: 'Learn Redux Thunk',
    completed: false,
    description: 'Learn Redux Thunk with React and Redux Toolkit'
  },
  {
    id: 5,
    title: 'Learn Redux Saga',
    completed: false,
    description: 'Learn Redux Saga with React and Redux Toolkit'
  }
]

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload)
    },
    addTodo: (state, action) => {
      return [...state, action.payload]
    },
    updateTodo: (state, action) => {
      const { id, title, description, completed } = action.payload
      // Utilizamos el método .map() para crear un nuevo array con el estado actualizado
      const updatedTodos = state.map(todo => {
        // Si encontramos el todo con el id especificado, actualizamos sus propiedades
        if (todo.id === id) {
          return {
            ...todo, // Mantenemos las propiedades originales
            title, // Actualizamos el título
            description, // Actualizamos la descripción
            completed // Actualizamos el estado de completado
          }
        }
        // Si no es el todo que estamos buscando, devolvemos el mismo objeto sin cambios
        return todo
      })

      return updatedTodos
    },
    updateTodoStatus: (state, action) => {
      const { id, completed } = action.payload
      // Utilizamos el método .map() para crear un nuevo array con el estado actualizado
      const updatedTodos = state.map(todo => {
        // Si encontramos el todo con el id especificado, actualizamos su propiedad completed
        if (todo.id === id) {
          return {
            ...todo, // Mantenemos las propiedades originales
            completed // Actualizamos el estado de completado
          }
        }
        // Si no es el todo que estamos buscando, devolvemos el mismo objeto sin cambios
        return todo
      })

      return updatedTodos
    }
  }
})

export default todosSlice.reducer

export const { deleteTodo, addTodo, updateTodo, updateTodoStatus } = todosSlice.actions

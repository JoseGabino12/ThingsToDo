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
    }
  }
})

export default todosSlice.reducer

export const { deleteTodo } = todosSlice.actions

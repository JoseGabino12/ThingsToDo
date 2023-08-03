import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todos/slice'

const persistanceMiddleware = store => next => action => {
  next(action)
  // eslint-disable-next-line no-undef
  localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    todos: todosReducer
  },
  middleware: [persistanceMiddleware]
})

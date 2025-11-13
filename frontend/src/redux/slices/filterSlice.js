import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: ''
}

const filterSlice = createSlice({
  // она создаёт action (объект)
  // Они нужны для того, чтобы потом "диспачить" их в Redux store
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // We can return state as usually
      return { ...state, title: action.payload }

      // Can mutate state thanks to Immer library
      // state.title = action.payload
    },
    setAuthorFilter: (state, action) => {
      return { ...state, author: action.payload }
    },
    resetFilters: (state) => {
      return initialState
    },
  },
})

// console.log(filterSlice.actions)
// console.log(filterSlice.actions.setTitleFilter('test'))
export const { setTitleFilter, setAuthorFilter, resetFilters } =
  filterSlice.actions // она создаёт action (объект)

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author


export default filterSlice.reducer

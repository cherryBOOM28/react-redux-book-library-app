import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
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
    resetFilters: () => {
      return initialState
    },
    setOnlyFavoriteFilter: (state) => {
      return { ...state, onlyFavorite: !state.onlyFavorite }
    },
  },
})

// console.log(filterSlice.actions)
// console.log(filterSlice.actions.setTitleFilter('test'))
export const {
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  setOnlyFavoriteFilter,
} = filterSlice.actions // она создаёт action (объект)

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite

export default filterSlice.reducer

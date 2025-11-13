import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
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
    resetFilters: (state) => {
      return initialState
    },
  },
})

// console.log(filterSlice.actions)
// console.log(filterSlice.actions.setTitleFilter('test'))
export const { setTitleFilter, resetFilters } = filterSlice.actions // она создаёт action (объект)

export const selectTitleFilter = (state) => state.filter.title

export default filterSlice.reducer

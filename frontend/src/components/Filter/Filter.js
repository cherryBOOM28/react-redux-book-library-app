import { useDispatch, useSelector } from 'react-redux'
import './Filter.css'
import {
  setTitleFilter,
  selectTitleFilter,
  setAuthorFilter,
  selectAuthorFilter,
  resetFilters,
  setOnlyFavoriteFilter,
  selectOnlyFavoriteFilter
} from '../../redux/slices/filterSlice'

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)


  // filter => name из filterSlice
  // то есть достается title из filter(filterSlice)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter())
  } 

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            onChange={handleTitleFilterChange}
            type="text"
            value={titleFilter} // значение в поле ввода всегда синхронизировано с состоянием в Redux
            placeholder="Filter by title..."
          />
        </div>
        <div className="filter-group">
          <input
            onChange={handleAuthorFilterChange}
            type="text"
            value={authorFilter}
            placeholder="Filter by author..."
          />
        </div>
        <div className="filter-group">
          <label>
            <input type='checkbox' checked={onlyFavoriteFilter} onChange={handleOnlyFavoriteFilterChange} />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset filters
        </button>
      </div>
    </div>
  )
}

export default Filter

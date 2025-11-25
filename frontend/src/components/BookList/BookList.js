import {
  deleteBook,
  selectBooks,
  toggleFavorite,
} from '../../redux/slices/booksSlice'
import './BookList.css'
import { useDispatch, useSelector } from 'react-redux'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import {
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
  selectTitleFilter,
} from '../../redux/slices/filterSlice'

const BookList = () => {
  const books = useSelector(selectBooks)
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id))
  }

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())

    // console.log({ title: book.title, matherTitle })
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())

    const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true
    return matchesTitle && matchesAuthor && matchesFavorite
  })

  const highlightMatch = (text, filter) => {
    if (!filter) return text

    const regex = new RegExp(`(${filter})`, 'gi')
    // console.log(text.split(regex))
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        )
      }
      return substring
    })
  }

  return (
    <div>
      <div className="app-block book-list">
        <h2>Book list</h2>
        {books.length === 0 ? (
          <p>No books available</p>
        ) : (
          <ul>
            {filteredBooks.map((book, i) => (
              <li key={book.id}>
                <div className="book-info">
                  {++i}. {highlightMatch(book.title, titleFilter)} by{' '}
                  <strong>{highlightMatch(book.author, authorFilter)}</strong>(
                  {book.source})
                </div>
                <div className="book-actions">
                  <span
                    onClick={() => handleToggleFavorite(book.id)}
                    className=""
                  >
                    {book.isFavorite ? (
                      <BsBookmarkStarFill className="star-icon" />
                    ) : (
                      <BsBookmarkStar className="star-icon" />
                    )}
                  </span>

                  <button
                    onClick={() => handleDeleteBook(book.id)}
                    className="book-actions"
                  >
                    delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default BookList

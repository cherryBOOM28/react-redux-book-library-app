import { deleteBook } from '../../redux/books/actionCreators'
import './BookList.css'
import { useDispatch, useSelector } from 'react-redux'

const BookList = () => {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    console.log(id)
    dispatch(deleteBook(id))
  }
  return (
    <div>
      <div className="app-block book-list">
        <h2>Book list</h2>
        {books.length === 0 ? (
          <p>No books available</p>
        ) : (
          <ul>
            {books.map((book, i) => (
              <li key={book.id}>
                <div className="book-info">
                  {++i}. {book.title} by <strong>{book.author}</strong>{' '}
                </div>
                <div>
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

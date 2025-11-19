import { useState } from 'react'
import './BookForm.css'
import { useDispatch } from 'react-redux'
import { addBook } from '../../redux/slices/booksSlice'
import booksData from '../../data/books.json'
import createBookWithId from '../../utils/createBookWithId'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    // dispatch action
    e.preventDefault()

    if (title && author) {
      dispatch(addBook(createBookWithId({ title, author })))
      setTitle('')
      setAuthor('')
    }
    // console.log('added')
  }

  const handleAddRandomBook = () => {
    // console.log(booksData);
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]

    dispatch(addBook(createBookWithId(randomBook)))
  }

  return (
    <div className="app-block book-form">
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="title">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add random book
        </button>
      </form>
    </div>
  )
}

export default BookForm

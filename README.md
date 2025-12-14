# 📚 Book Library App

Book Library App is a React application for managing a list of books using Redux Toolkit and a separate Express backend.

## ✨ Features

### 📖 Add Books
Books can be added in three different ways:
- **Manual** — manual input
- **Random** — randomly generated book
- **Random via API** — fetched from an external API

Each book displays its source:
`manual | random | random via api`

### 🗂 Book List
- Display a list of added books
- Delete books from the list
- Add / remove books from **favorites**

### 🔍 Search & Filters
- Filter by **title**
- Filter by **author**
- **Favorites** checkbox to show only favorite books
- Highlight matching characters while typing in the search input
- **Reset filters** button

---

## 🧠 Tech Stack

### Frontend
- React
- Redux Toolkit
  - createSlice
  - createAsyncThunk
  - useDispatch
  - useSelector
- CSS

### Backend
- Node.js
- Express
- Nodemon

---

## 🏗 State Management
All application state is managed with Redux Toolkit using slices and async thunks.

---

## 🎯 Purpose
This project was built to practice:
- Redux Toolkit and async state management
- CRUD functionality
- Filtering and search logic
- Frontend ↔ backend interaction

---

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start frontend
npm run dev

# start backend
npm run server

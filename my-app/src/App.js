import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BookTable from "./components/BookTable";
import DisplayBoard from "./components/DisplayBoard";
import CreateBook from "./components/CreateBook";
import {
  getAllBooks,
  createBook,
  getAllToDos,
  createToDo,
} from "./services/BookService";
import Footer from "./components/Footer";
import TodoTable from "./components/TodoTable";
import CreateTodo from "./components/CreateToDo";
import DisplayTodo from "./components/DisplayTodo";

function App() {
  const [bookShelf, setBookShelf] = useState({});
  const [todo, setTodo] = useState({});

  const [books, setBooks] = useState([]);
  const [toDos, setToDos] = useState([]);

  const [numberOfBooks, setNumberBooks] = useState(0);
  const [numberOfToDos, setNumberOfToDos] = useState(0);

  const handleSubmit = () => {
    createBook(bookShelf).then(() => {
      setNumberBooks(numberOfBooks + 1);
    });
  };

  const handleToDoSubmit = () => {
    createToDo(todo).then(() => {
      setNumberOfToDos(numberOfToDos + 1);
    });
  };

  const getAllBook = () => {
    getAllBooks().then((data) => {
      console.log(data)
      setBooks(data);
      setNumberBooks(data.length);
    });
  };

  const getAllTodo = () => {
    getAllToDos().then((data) => {
      console.log(data)
      setToDos(data);
      setNumberOfToDos(data.length);
    });
  };

  const handleOnChangeForm = (e) => {
    let inputData = bookShelf;
    if (e.target.name === "book") {
      bookShelf.book = e.target.value;
    } else if (e.target.name === "category") {
      bookShelf.category = e.target.value;
    } else if (e.target.name === "author") {
      bookShelf.author = e.target.value;
    }
    setBookShelf(inputData);
  };

  const handleOnChangeToDoForm = (e) => {
    let inputData = todo;
    if (e.target.name === "todo") {
      todo.todo = e.target.value;
    } else if (e.target.name === "category") {
      todo.category = e.target.value;
    } else if (e.target.name === "isComplete") {
      todo.isComplete = e.target.value;
    }
    setTodo(inputData);
  };

  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <CreateBook
          bookShelf={bookShelf}
          onChangeForm={handleOnChangeForm}
          handleSubmit={handleSubmit}
        />
        <DisplayBoard numberOfBooks={numberOfBooks} getAllBook={getAllBook} />
        <BookTable books={books} />

        <CreateTodo
          todo={todo}
          handleOnChangeToDoForm={handleOnChangeToDoForm}
          handleToDoSubmit={handleToDoSubmit}
        />
        <DisplayTodo numberOfToDos={numberOfToDos} getAllTodo={getAllTodo} />
        <TodoTable toDos={toDos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;

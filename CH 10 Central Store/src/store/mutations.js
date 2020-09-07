import state from './state';

function setBooks(books){
    state.books = books;
}

function setQuery(query){
    state.query = query;
}

function setSelectedBook(newBook){
    state.selectedBook = newBook;
}

export default {
    setBooks,
    setQuery,
    setSelectedBook
}
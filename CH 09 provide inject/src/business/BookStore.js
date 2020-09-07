import { reactive, computed } from 'vue';
import api from '@/api/booksAPI';
  
function isInQuery(query){
    return function(book){
        return (
          (!query.title || book
          .title.toLowerCase()
          .includes(query.title.toLowerCase())) && 
          (!query.author || book
          .author.toLowerCase()
          .includes(query.author.toLowerCase()))); 
    };
}

function BookStore() {
  const state = reactive({
    books: [],
    query: {},
    selectedBook: null,
    filteredBooks: computed(filterBooks)
  });

  function setQuery(query){
    state.query = query;
  }

  function selectBook(id){
    if(id){
      api.fetchBook(id)
        .then(newBook => state.selectedBook = newBook);
    } else {
      state.selectedBook = null;
    }
  }

  function filterBooks(){
    const { query } = state;
    return state.books.filter(isInQuery(query));
  }

  function fetchBooks(){
    api.fetchBooks().then(data => {
      state.books = data;
    });
  }

  return {
    state,
    setQuery,
    selectBook,
    fetchBooks
  }
}

export default BookStore;
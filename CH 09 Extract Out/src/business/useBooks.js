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

function useBooks() {
  const state = reactive({
    books: [],
    query: {},
    filteredBooks: computed(filterBooks),
    selectedBook: null
  });

  function setQuery(query){
    state.query = query;
  }

  function selectBook(id){
    if(id){
      api.fetchBook(id)
        .then(newBook => state.selectedBook = newBook);
    }
  }

  function filterBooks(){
    const { query } = state;
    return state.books.filter(isInQuery(query));
  }

  api.fetchBooks().then(data => {
    state.books = data;
  });

  return {
    state,
    setQuery,
    selectBook
  }
}

export default useBooks;
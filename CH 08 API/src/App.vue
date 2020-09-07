<template>
  <div id="app">
    <BookSearch 
     @search-by="setQuery" />
    <BookList 
     :books="state.filteredBooks" 
     @select="selectBook" />
    <BookDetails 
     :book="state.selectedBook" />
  </div>
</template>

<script>
import BookSearch from './components/BookSearch.vue';
import BookList from './components/BookList.vue';
import BookDetails from './components/BookDetails.vue';

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

export default {
  components: {
    BookSearch,
    BookList,
    BookDetails
  },
  setup() {   
    const state = reactive({
      books: [],
      query: {},
      selectedBook: null,
      filteredBooks: computed(filterBooks)
    });

    function setQuery(query){
      state.query = query;
    }

    function filterBooks(){
      return state.books.filter(isInQuery(state.query));
    }

    function selectBook(id){
      if(id){
        api.fetchBook(id)
          .then(newBook => state.selectedBook = newBook);
      }
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
}
</script>
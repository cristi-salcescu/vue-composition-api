<template>
  <div id="app">
    <BookSearch 
     @search-by="setQuery" />
    <BookList 
     :books="state.filteredBooks" 
     @select="selectBook" />
    <BookDetails 
     :id="state.selectedId" />
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue';

import BookSearch from './components/BookSearch.vue';
import BookList from './components/BookList.vue';
import BookDetails from './components/BookDetails.vue';

import api from './api/booksAPI';
  
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
      filteredBooks: computed(filterBooks),
      selectedId: 0
    });

    function setQuery(query){
      state.query = query;
    }

    function selectBook(id){
      state.selectedId = id;
    }

    function filterBooks(){
      const { query } = state;
      return state.books.filter(isInQuery(query));
    }
 
    onMounted(() => {
      api.fetchBooks().then(data => {
        state.books = data;
      });
    })

    return {
      state,
      setQuery,
      selectBook
    }
  } 
}
</script>
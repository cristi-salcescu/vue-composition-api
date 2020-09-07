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

import bookStore from './business/bookStore';

export default {
  components: {
    BookSearch,
    BookList,
    BookDetails
  },
  setup() {
    const { state, setQuery, selectBook, fetchBooks } = bookStore;

    fetchBooks();
    
    return {
      state,
      setQuery,
      selectBook
    }
  } 
}
</script>
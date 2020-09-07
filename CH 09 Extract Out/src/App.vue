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

import useBooks from './business/useBooks';

export default {
  components: {
    BookSearch,
    BookList,
    BookDetails
  },
  setup() {
    return {
      ...useBooks()
    }
  } 
}
</script>
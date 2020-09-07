<template>
  <div id="app">
    <BookSearch 
     @search-by="mutations.setQuery" />
    <BookList 
     :books="getters.books" 
     @select="actions.selectBook" />
    <BookDetails 
     :book="getters.selectedBook" />
  </div>
</template>

<script>
import BookSearch from './components/BookSearch.vue';
import BookList from './components/BookList.vue';
import BookDetails from './components/BookDetails.vue';

import actions from './store/actions';
import mutations from './store/mutations';
import getters from './store/getters';

export default {
  name: 'app',
  components: {
    BookSearch,
    BookList,
    BookDetails
  },
  setup() {

    actions.fetchBooks();

    return {
      getters,
      mutations,
      actions
    }
  } 
}
</script>
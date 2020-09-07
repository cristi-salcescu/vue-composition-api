<template>
  <div id="app">
    <BookSearch />
    <BookList  />
    <BookDetails />
  </div>
</template>

<script>
import BookSearch from './components/BookSearch.vue';
import BookList from './components/BookList.vue';
import BookDetails from './components/BookDetails.vue';

import actions from './store/actions';

export default {
  name: 'app',
  components: {
    BookSearch,
    BookList,
    BookDetails
  },
  setup() {
    actions.fetchBooks();
  } 
}
</script>
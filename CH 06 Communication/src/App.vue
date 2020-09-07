<template>
  <div id="app">
    <BookSearch 
     @search-by="filterBooks" />
    <BookList 
     :books="books" />
  </div>
</template>

<script>
import BookSearch from './components/BookSearch.vue';
import BookList from './components/BookList.vue';

export default {
  components: {
    BookSearch,
    BookList
  },
  setup() {
    const books = [{
      id: 1,
      title: 'The Cherry Orchard',
      author: 'Anton Chekhov'
    },
    {
      id: 2,
      title: 'Ivanov',
      author: 'Anton Chekhov'
    }];

    function filterBooks(query){
      console.log(query);
    }

    return {
      books,
      filterBooks
    }
  } 
}
</script>
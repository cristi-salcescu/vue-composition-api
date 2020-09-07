<template>
  <div id="app">
    <BookSearch 
     @search-by="filterBooks" />
    <BookList 
     :books="state.filteredBooks" />
    <BookDetails />
  </div>
</template>

<script>
import { reactive } from 'vue';

import BookSearch from './components/BookSearch.vue';
import BookList from './components/BookList.vue';
import BookDetails from './components/BookDetails.vue';

const books = [{
  title: 'The Cherry Orchard',
  author: 'Anton Chekhov'
},
{
  title: 'Ivanov',
  author: 'Anton Chekhov'
}];
  
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
      filteredBooks: books
    })

    function filterBooks(query){
      state.filteredBooks = books.filter(isInQuery(query));
    }

    return {
      state,
      filterBooks
    }
  } 
}
</script>
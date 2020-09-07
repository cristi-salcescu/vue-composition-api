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
import { reactive, computed } from 'vue';

import BookSearch from './components/BookSearch.vue';
import BookList from './components/BookList.vue';
import BookDetails from './components/BookDetails.vue';

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
      query: {},
      filteredBooks: computed(filterBooks),
      selectedBook: null
    })

    function setQuery(query){
      state.query = query;
    }

    function selectBook(id){
      state.selectedBook = {id}
    }

    function filterBooks(){
      return books.filter(isInQuery(state.query));   
    }

    return {
      state,
      setQuery,
      selectBook
    }
  } 
}
</script>
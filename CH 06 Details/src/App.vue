<template>
  <div id="app">
    <BookSearch 
     @search-by="filterBooks" />
    <BookList 
     :books="books"
     @select="selectBook" />
    <BookDetails 
     :id="1" />
  </div>
</template>

<script>
import BookSearch from './components/BookSearch.vue';
import BookList from './components/BookList.vue';
import BookDetails from './components/BookDetails.vue';

export default {
  name: 'app',
  components: {
    BookSearch,
    BookList,
    BookDetails
  },
  setup() {
    const books = [{
      title: 'The Cherry Orchard',
      author: 'Anton Chekhov'
    },
    {
      title: 'Ivanov',
      author: 'Anton Chekhov'
    }];

    function filterBooks(query){
      console.log(query);
    }

    function selectBook(book){
      console.log(book)
    }

    return {
      books,
      filterBooks,
      selectBook
    }
  } 
}
</script>
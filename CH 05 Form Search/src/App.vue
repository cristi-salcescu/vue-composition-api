<template>
  <div id="app">
    <BookSearch />
    <BookList :books="books" />
  </div>
</template>

<script>
import BookSearch from './components/BookSearch.vue';
import BookList from './components/BookList.vue';

export default {
  name: 'app',
  components: {
    BookSearch,
    BookList
  },
  setup() {
    const books = [{
      id:1,
      name: 'Vue'
    },
    {
      id:2,
      name: 'JS'
    }];

    return {
      books
    }
  } 
}
</script>
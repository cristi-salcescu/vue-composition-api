<template>
  <div id="app">
    <BookList :books="books" />
  </div>
</template>

<script>
import BookList from './components/BookList.vue'

export default {
  name: 'app',
  components: {
    BookList
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

    return {
      books
    }
  } 
}
</script>
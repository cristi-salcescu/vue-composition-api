<template>
  <div id="app">
    <BookItem :book="book" />
  </div>
</template>

<script>
import BookItem from './components/BookItem.vue';

export default {
  components: {
    BookItem
  },
  setup() {
    const book = {
      title: 'The Cherry Orchard',
      author: 'Anton Chekhov'
    };

    return {
      book
    }
  } 
}
</script>
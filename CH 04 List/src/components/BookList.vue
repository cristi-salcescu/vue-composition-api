<template>
  <div>
    <BookItem 
        v-for="book in books" 
        :key="book.id" 
        :book="book" />
  </div>
</template>

<script>
import BookItem from './BookItem.vue';

export default {
  props: {
    books: Array
  },
  components: {
    BookItem
  }
}
</script>
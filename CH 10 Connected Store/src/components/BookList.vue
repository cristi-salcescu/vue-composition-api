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
import getters from '@/store/getters';

export default {
  components: {
    BookItem
  },
  setup() {
    return {
      books: getters.books
    }
  }  
}
</script>
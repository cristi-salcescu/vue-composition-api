<template>
  <div>
    <BookItem 
        v-for="book in books" 
        :key="book.id" 
        :book="book"
        @select="select" />
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
  },
  setup(props, context) {
      function select(book){
          context.emit('select', book);
      }

      return {
          select
      }
  }  
}
</script>
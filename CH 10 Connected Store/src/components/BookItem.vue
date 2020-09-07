<template>
    <div class="book-item">
        <div>{{book.title}}</div>
        <div>{{book.author}}</div>
        <div><button @click="select(book.id)">Select</button></div>
    </div>
</template>

<script>
import actions from '@/store/actions';

export default {
    props: ['book'],
    setup() {
        return {
            select: actions.selectBook
        }
    }
}
</script>
<style scoped>
.book-item {
  display: flex;
}

.book-item > div {
    flex: 1;
}
</style>
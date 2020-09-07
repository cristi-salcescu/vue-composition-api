<template>
    <div class="book-item">
        <div>{{book.title}}</div>
        <div>{{book.author}}</div>
    </div>
</template>

<script>
export default {
    props: {
        book: Object
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
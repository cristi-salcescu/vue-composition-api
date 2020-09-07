<template>
    <div class="book-item">
        <div>{{book.title}}</div>
        <div>{{book.author}}</div>
        <div><button @click="select">Select</button></div>
    </div>
</template>

<script>
export default {
    props: {
        book: Object
    },
    setup(props, context) {
        function select(){
            context.emit('select', props.book);
        }

        return {
            select
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
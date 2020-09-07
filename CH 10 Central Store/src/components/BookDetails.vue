<template>
    <div class="book-details" v-if="book">
        <div>{{book.title}}</div>
        <div>{{book.author}}</div>
        <div>
            <span>ISBN:</span>
            <span>{{book.isbn}}</span>
        </div>
        <div>
            <span>Pages:</span> 
            <span>{{book.pages}}</span>
        </div>
        <div>
            <span>Publisher</span>
            <span>{{book.publisher}}</span>    
        </div>
        <div>{{book.description}}</div>
    </div>
</template>

<script>
export default {
    props: ['book']
}
</script>
<style scoped>
.book-details {
    margin-top: 24px;
}
</style>
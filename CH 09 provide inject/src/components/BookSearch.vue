<template>
    <form v-on:submit.prevent="submit">
        <div>
            <label>Title:</label>
            <input 
                type="search" 
                v-model="title" />
        </div>
        <div>
            <label>Author:</label>
            <input 
                type="search" 
                v-model="author" />
        </div>
        <div>
            <button type="submit">
                Search
            </button>
        </div>
    </form>    
</template>

<script>
import { ref, inject } from 'vue';

export default {
    setup(props, context) {
        const bookStore = inject("bookStore");
        console.log(bookStore)

        const title = ref('');
        const author = ref('');

        function submit(){
            const query = { title: title.value, author: author.value };
            context.emit('search-by', query);
        }

        return {
            title,
            author,
            submit
        }
    }
}
</script>
<style scoped>
form {
    margin: 16px 0;
}

form label {
    width: 64px;
    display: inline-block;
}
</style>
<template>
    <form v-on:submit.prevent="submit">
        <div>
            <label>Title:</label>
            <input 
                type="search" 
                v-model="state.title" />
        </div>
        <div>
            <label>Author:</label>
            <input 
                type="search" 
                v-model="state.author" />
        </div>
        <div>
            <button type="submit">
                Search
            </button>
        </div>
    </form>    
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const state = reactive({
            title: '',
            author: ''
        });

        function submit(){
            const query = { ...state };
            console.log(query);
        }

        return {
            state,
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
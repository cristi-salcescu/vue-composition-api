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
import { ref, watch } from 'vue';
import api from '../api/booksAPI';

export default {
    props: ['id'],
    setup(props) {
        const book = ref(null);

        watch(
            () => props.id, 
            (id, prevId) => {
                console.log(id, prevId)
            }
        );

        watch(
            props, 
            props => {
                console.log(props.id)
            }
        );

        watch(
            () => props.id, 
            id => {
                if(id){
                    api.fetchBook(id)
                    .then(data => { book.value = data; });
                } else {
                    book.value = null;
                }
            }
        );

        return {
            book
        }
    }
}
</script>
<style scoped>
.book-details {
    margin-top: 24px;
}
</style>
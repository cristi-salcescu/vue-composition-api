import { computed, toRef } from 'vue';
import state from './state';

const getters = {
    books: computed(() => filterBooks(state)),
    selectedBook: toRef(state, 'selectedBook')
};

function filterBooks({books, query}){
    return books.filter(isInQuery(query));
}

function isInQuery(query){
    return function(book){
        return (
          (!query.title || book
          .title.toLowerCase()
          .includes(query.title.toLowerCase())) && 
          (!query.author || book
          .author.toLowerCase()
          .includes(query.author.toLowerCase()))); 
    };
}

export default getters;



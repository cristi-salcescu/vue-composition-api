import { computed } from 'vue';
import state from './state';

const getters = {
    selectedBook: computed(() => state.selectedBook),
    books: computed(() => filterBooks(state))
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



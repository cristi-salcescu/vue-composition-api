import api from '../api/booksAPI';
import mutations from './mutations';

function fetchBooks(){
    return api
        .fetchBooks()
        .then(mutations.setBooks);
}

function selectBook(id){
    if(id){
        api.fetchBook(id)
            .then(mutations.setSelectedBook);
    }
}

export default {
    fetchBooks,
    selectBook
};
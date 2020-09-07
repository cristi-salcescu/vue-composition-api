import { reactive } from 'vue';

const state = reactive({
    books: [],
    query: {},
    selectedBook: null
});

export default state;
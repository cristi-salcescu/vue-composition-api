import {reactive, toRef} from 'vue';

const state = reactive({
  selectedBook : {id: 1}
})

const getters = {
  selectedBook: toRef(state, 'selectedBook')
};

state.selectedBook = {id: 2};
console.log(getters.selectedBook.value) 
// { id: 2 }

getters.selectedBook.value = {id: 3};
console.log(state.selectedBook) 
// { id: 3 }
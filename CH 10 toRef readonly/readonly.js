import {reactive, readonly} from 'vue';

const state = reactive({
  selectedBook : {id: 1}
})

const getters = {
  state: readonly(state)
};

state.selectedBook = {id: 2};
console.log(getters.state.selectedBook) 
// { id: 2 }

getters.state.selectedBook = {id: 3};
//Set operation on key "selectedBook" failed: target is readonly.
console.log(state.selectedBook) 
// { id: 3 }
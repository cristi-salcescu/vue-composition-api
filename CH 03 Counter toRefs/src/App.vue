<template>
  <div>
    {{counter}}
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const state = reactive({
      counter: 0
    });

    function increment(){
      state.counter += 1;
    }

    function decrement(){
      state.counter -= 1;
    }

    return {
      ...toRefs(state),
      increment,
      decrement
    }
  } 
}
</script>
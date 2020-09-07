<template>
  <div>
    {{counter}}
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0);

    function increment(){
      counter.value += 1;
    }

    function decrement(){
      counter.value -= 1;
    }

    return {
      counter,
      increment,
      decrement
    }
  } 
}
</script>
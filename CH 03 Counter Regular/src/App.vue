<template>
  <div>
    {{counter}}
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      counter: 0
    }
  },
  methods: {
    increment(){
      this.counter += 1;
    },
    decrement(){
      this.counter -= 1;
    }
  } 
}
</script>
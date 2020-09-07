<template>
  <div>
    <div 
     v-for="number in numbers" 
     :key="number" >
       {{ number }}
    </div>
    <button @click="generate">Generate</button>
    <button @click="deleteElement">Delete</button>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data(){
    return {
      numbers: [0, 1]
    }
  },
  methods: {
    generate(){
      this.numbers[0] = Math.random();
      Vue.set(this.numbers, 0, Math.random());
    },
    deleteElement(){
      delete this.numbers[1];
      Vue.delete(this.numbers, 0);
    }
  } 
}
</script>
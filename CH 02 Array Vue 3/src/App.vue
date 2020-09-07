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
export default {
  data(){
    return {
      numbers: [0, 1]
    }
  },
  methods: {
    generate(){
      this.numbers[0] = Math.random();
    },
    deleteElement(){
      delete this.numbers[1];
    }
  } 
}
</script>
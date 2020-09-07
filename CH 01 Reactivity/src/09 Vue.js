import { reactive, watchEffect } from 'vue';

const state = reactive({
  message: "This is a message"
});

function render(state){
  document.getElementById("UI").innerHTML = 
    `<span>${state.message}</span>`;
}

watchEffect(() => {
  render(state);
});

state.message = "A new message";

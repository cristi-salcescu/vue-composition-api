const state = {
  message : "This is a message"
};

render(state);

function render(state){
  document.getElementById("UI").innerHTML = 
    `<span>${state.message}</span>`;
}

state.message = "A new message";
render(state);

function render(state){
  document.getElementById("UI").innerHTML = `<span>${state.message}</span>`;
}

const reactiveHandler = {
    set: function(obj, prop, value) {
        obj[prop] = value;
        render(obj);
        return true;        // Indicate success
      }
  };

function reactive(obj){
  return new Proxy(obj, reactiveHandler);
}
  
//JS
const state = reactive({
  message: "This is a message"
});

render(state);

state.message = "A new message";

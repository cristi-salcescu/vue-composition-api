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
  
//JS
const state = new Proxy({
  message: "This is a message"
}, reactiveHandler);

render(state);

state.message = "A new message";

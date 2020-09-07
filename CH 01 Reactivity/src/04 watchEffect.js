let currentFunc = null;
let subscriber = null;

function watchEffect(f){
  currentFunc = f;
  f();
  currentFunc = null;
}

const reactiveHandler = {
    get: function  (obj, prop) {
      if(currentFunc != null){
        subscriber = currentFunc;
      }
      return obj[prop];
    },
    set: function(obj, prop, value) {
      obj[prop] = value;
      subscriber(obj);
  
      // Indicate success
      return true;
    }
  };

function reactive(obj){
    return new Proxy(obj, reactiveHandler);
}
  
//JS
const state = reactive({
    message: "This is a message"
});

watchEffect(() => {
  render(state);
});

state.message = "A new message";

function render(state){
  document.getElementById("UI").innerHTML = `<span>${state.message}</span>`;
}
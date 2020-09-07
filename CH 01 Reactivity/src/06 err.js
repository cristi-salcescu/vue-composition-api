let currentFunc = null;
const subscribers = [];
  
function notify(obj){    
  subscribers.forEach(fn => {
      fn(obj);
  });
}

function watchEffect(f){
  currentFunc = f;
  f();
  currentFunc = null;
}

const reactiveHandler = {
    get: function  (obj, prop) {
      if(currentFunc != null){
        subscribers.push(currentFunc);
      }
      return obj[prop];
    },
    set: function(obj, prop, value) {
      obj[prop] = value;
      notify(obj);
      return true;
    }
  };

function reactive(obj){
  return new Proxy(obj, reactiveHandler);
}
  
//JS
let state = reactive({
  message: "This is a message"
});

watchEffect(() => {
  console.log(`Message: ${state.message}`)
});

state.message = "A new message";

const book = reactive({
  title: "JavaScript"
});

watchEffect(() => {
  console.log(`Book: ${book.title}`)
});

book.title = "Vue";

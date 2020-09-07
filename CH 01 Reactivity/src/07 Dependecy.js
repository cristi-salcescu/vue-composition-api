let currentFunc = null;

class Dependency {
    constructor(){
      this.subscribers = [];
    }
  
    add(f){
        if(f != null){
            this.subscribers.push(f);
        }
    }

    notify(obj){    
        this.subscribers.forEach(f => {
            f(obj);
        });
    }
}

function watchEffect(f){
  currentFunc = f;
  f();
  currentFunc = null;
}

const depsMap = new WeakMap();

const reactiveHandler = {
    get: function  (obj, prop) {
      let dep = depsMap.get(obj);
      if(!dep){
        dep = new Dependency()
        depsMap.set(obj, dep)
      }
      dep.add(currentFunc);
      return obj[prop];
    },
    set: function(obj, prop, value) {
      obj[prop] = value;
      const dep = depsMap.get(obj);
      dep.notify();
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

const book = reactive({
    title: "JavaScript"
});
  
watchEffect(() => {
    console.log(`Book: ${book.title}`)
});

book.title = "Vue";

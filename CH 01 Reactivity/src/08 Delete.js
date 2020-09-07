//Reactive API
let currentFunc = null;

class Dependency {
  constructor(){
    this.subscribers = new Set();
  }

  add(f){
      if(f != null){
          this.subscribers.add(f);
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
    },
    deleteProperty(obj, prop) {
        if (obj.hasOwnProperty(prop)) {
            delete obj[prop];
            const dep = depsMap.get(obj);
            dep.notify();
        }
    }
  };

function reactive(obj){
  return new Proxy(obj, reactiveHandler);
}
  
//
const arr = reactive([1, 2, 3]);
  
watchEffect(() => {
    render(arr);
});
  
arr[0] = 100;
delete arr[0]

function render(arr){
    document.getElementById("UI").innerHTML = `<span>${arr}</span>`;
}
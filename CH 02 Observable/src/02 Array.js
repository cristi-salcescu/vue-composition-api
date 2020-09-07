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

function createReactiveProperty(obj, prop) {
    let value = obj[prop]
    Object.defineProperty(obj, prop, {
        get () {
            let dep = depsMap.get(obj);
            if(!dep){
              dep = new Dependency()
              depsMap.set(obj, dep)
            }
            dep.add(currentFunc);
            return value;
        },
        set (newValue) {
            value = newValue
        }
    });
}

const arrayPrototype = {
    value: null,
    push(newElement){
        this.value.push(newElement);
        const dep = depsMap.get(this);
        dep.notify(this);
    }
}

function observable(array) {
    const obj = Object.create(arrayPrototype);
    obj.value = array;
    createReactiveProperty(obj, 'value');
    return obj;
}

const arr = observable([1, 2, 3]);
  
watchEffect(() => {
    render(arr);
});

console.log(arr)
arr.push(4);
  
arr[0] = 100;
delete arr[0];

function render(arr){
    document.getElementById("UI").innerHTML = `<span>${arr.value}</span>`;
}
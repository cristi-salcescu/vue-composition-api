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
            value = newValue;
            const dep = depsMap.get(obj);
            dep.notify(obj);
        }
    });
}

function observable(obj) {
    Object.keys(obj).forEach((prop) => {
        createReactiveProperty(obj, prop);
    });
    return obj;
}

const fruit = observable({
    calories: 99,
    protein: 1.4
});

console.log(fruit);
  
watchEffect(() => {
    render(fruit);
});
  
//delete fruit.title;
//fruit.carbs = 24.7;

function render(fruit){
    document.getElementById("UI").innerHTML = `<span>Calories: ${fruit.calories} Protein: ${fruit.protein}</span>`;
}
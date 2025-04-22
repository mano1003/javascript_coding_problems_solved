/*
let x= {}, y = {name:"Ronny"},z = {name:"John"};
x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};
console.log(x[y]); 

function runFunc(){
    console.log("1" + 1);  
    console.log("A" - 1); 
    console.log(2 + "-2" + "2"); 
    console.log("Hello" - "World" + 78); 
    console.log("Hello"+ "78"); 
  }
  runFunc();

let a = 0;
let b = false;
console.log((a == b)); 
console.log((a === b)); 


let hero = {
    powerLevel: 99,
    getPower(){
      return this.powerLevel;
    }
  }
  
  let getPower = hero.getPower;
  
  let hero2 = {powerLevel:42};
  console.log(getPower());  
  console.log(getPower.apply(hero2));  


  const a = function(){
    console.log(this); 
  
    const b = {
      func1: function(){
        console.log(this);  
      }  
    }
  
    const c = {
      func2: ()=>{
        console.log(this);  
      }
    }
  
    b.func1();
    c.func2();
  }
  
  a();  
  */
  const b = {
    name:"Vivek",
    f: function(){
      var self = this;
      console.log(this.name); 
      (function(){
        console.log(this.name); 
        console.log(self.name); 
      })();
    }
  }
  b.f();
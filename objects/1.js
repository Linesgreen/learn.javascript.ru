let user = {};
user.name = "Jhon";
user.surname = "Smit";

console.log(user);

user.name = "Pete";
 
console.log(user);

delete user.name;

console.log(user);
////////////////////////////////////
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum = 0;
  for(name in salaries) {
    sum += salaries[name];
  }
  console.log(sum);
  /////////////////////////////////////

function multiplyNumeric(Obj) {
    for(prop in Obj) {
        typeof Obj[prop] == 'number' ? Obj[prop] = Obj[prop] *2 : null;
    }
}


  // до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  multiplyNumeric(menu);
  console.log(menu);

  
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return console.log('Родители разрешили?');
    }
  }


  function checkAgeWith_01(){
    return checkAge > 18 ? true : console.log('Родители разрешили?')
  }

  function checkAge_02(age) {
    return checkAge > 18 || console.log('Родители разрешили?')
  }


  function min(a,b) {
    return a > b ? console.log(b) : console.log(a);
  }

  function pow(x,n) {
    let stepen = x;
    for (i = 1; i < n; i += 1){
        x *= stepen;
        console.log(x) ;
    }
    return console.log(x);
  }

  pow(3,3);


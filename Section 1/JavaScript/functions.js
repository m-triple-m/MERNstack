// Arithmetic Operators in JavaScript  + , - , / , %, *

//method 1
const check_divisible = function (a, b) {

    if (a % b == 0) {
        console.log(a+' is divisible by '+b);
    }else{
        console.log(`${a} is not divisible by ${b}`);
    }
}


// check_divisible(100, 15);
// check_divisible(34567, 65);
// check_divisible(40000, 200);


//method 2
const check_both = x => {

    if(x%7==0 && x%13==0 ){
        console.log(`${x} is divisible by 7 and 13`);
    }else if(x%7==0 || x%12 == 0){
        console.log(`${x} is either divisible by 7 or 13`);
    }else{
        console.log(`${x} is neither divisible by 7 or 13`);
    }
}

check_both(456);
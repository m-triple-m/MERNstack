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

//default parameters
const many_params = (name = 'default_name', email = 'default_email', username = 'default_username', age = 00) => {
    console.log(`name : ${name}, email : ${email}, usermame : ${username}, age : ${age}, `)
}



many_params('mmm', 'mmm@mail.com', 'username', 100, 200);

//Rest Parameters
const sum_all = (x, y, ...nums) => {
    console.log(nums);
    console.log(nums.reduce((i, j) => i+j))
}

sum_all(1, 2, 3, 4, 5, 6);


//Method properties

const userMethods = {
    addUser : () => { console.log('user added') },
    updateUser : () => { console.log('user updated') }
}

userMethods.addUser();
userMethods.updateUser();

const newUserMethods = {
    addUser (){ console.log('user added') },
    updateUser (){ console.log('user updated') },
    name : 'ttt'
}

newUserMethods.addUser();
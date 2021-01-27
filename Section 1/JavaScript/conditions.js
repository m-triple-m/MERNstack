marks = 20;

// creating conditions

//1. Using Comparison Operators ( < , > , ==, ===, <=, >=, !=)
console.log('20' === 20);


//2. Using functions ( includes )
name1 = 'Hritik Srivastava';
console.log(name1.includes('Sri'));


if(marks>=90){
    let myvar = 'visible everywhere';
    console.log('You got Grade A');
    console.log('Congratulations');
}else if(marks >= 70){
    console.log('you got grade B');
}else if(marks >= 50){
    console.log('you got grade c');
}else{
    console.log('you failed');
}

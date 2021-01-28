//map
nums = [12, 32, 4, 21, 34, 54]

const new_nums =  nums.map(n => n*n);

console.log(new_nums);

//filter
ages = [43, 23, 15, 87, 23, 12, 5]

let new_ages = ages.filter(num => num>20);

console.log(new_ages);


//reduce

let max = nums.reduce((a, b) => a>b?a:b)

console.log(max);


movies = ['Deadpool', 'Dhoom', 'Bang Bang', 'Dark Knight', 'Black Pather', 'Avengers'];
web_series = ['Agent Carter', 'Big Bang', 'Mirzapur'];

merged_array = movies.concat(web_series);

console.log(merged_array);

merged_array2 = [...movies, ...web_series, '3 Idiots', 'Ant Man'];

console.log(merged_array2.sort());

//Array Destruction

nums = [43, 645, 21, 65];

[a, , , x] = nums;

console.log(a, x);
let user = { name: 'mmm', email: 'mmm@mail.com', password: 1234, contact: 999999 };

// console.log(user.email, user.name);
// console.log(user['email'], user['name']);

let email = 'aaa@mail.com'

console.log(user.email);
console.log(user['email'] == email);

user.age = 78;
user['admin'] = true;

console.log(user);

user['admin'] = false;

console.log(user)

movie_name = 'Inception';
director = 'Christopher Nolan';
actor = [ 'Leonardo DiCaprio', 'Tom Hardy', 'Joseph Gordon' ];


let movie_details = {movie_name, director, actor};

console.log(movie_details.actor);
const express = require('express');
const app = express();
const configs = require('./config');

const port = configs.port;

const userRouter = require('./routers/userManager');
const parser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(parser.json());
app.use('/user', userRouter);

const pokemon = {
    name: 'Balbusaur',
    hp: 100,
    defense: 60,
    attack: 50,
    total: 210
}

app.get('/pokemon', (req, res) => {
    res.json(pokemon);
})

app.get('/home', (req, res) => {
    console.log('got a request at home');
    res.send('You have successfully requested.');
})


app.listen(port, () => {
    console.log('server running..')
});
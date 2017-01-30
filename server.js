import express from 'express';
import mongoose from 'mongoose';

const app = express();
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/pokemons');
app.listen(7000);
console.log("Doraaagoooon cloooo");
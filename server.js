import express from 'express';
import mongoose from 'mongoose';
import graphqlHttp from 'express-graphql';
import schemas from './schemas';
import { Promise } from 'bluebird'

const app = express();

mongoose.Promise = Promise;
mongoose.connect('mongodb://127.0.0.1:27017/pokemons');

app.use('/graphql', graphqlHttp({
	schema : schemas,
	rootValue : global,
	graphiql : true,
}));


app.listen(7000);
console.log("Doraaagoooon cloooo");
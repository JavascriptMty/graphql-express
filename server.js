import express from 'express';
import mongoose from 'mongoose';
import graphqlHttp from 'express-graphql';
import schemas from './schemas';

const app = express();
mongoose.Promise = global.Promise;

app.use('/graphql', graphqlHttp({
	schema : schemas,
	rootValue : global,
	graphiql : true,
}));

mongoose.connect('mongodb://127.0.0.1:27017/pokemons');
app.listen(7000);
console.log("Doraaagoooon cloooo");
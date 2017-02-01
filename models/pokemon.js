import { Promise } from 'bluebird'
import mongoose from 'mongoose';

mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
	name : String,
	number : Number,
	preEvolution : {
		type : Schema.Types.ObjectId,
		ref : 'Pokemon'
	},
	evolution : [{
		type : Schema.Types.ObjectId,
		ref : 'Pokemon'
	}],
	categories : [{
		type : Schema.Types.ObjectId,
		ref : 'Category'
	}],
	attacks : [{
		type : Schema.Types.ObjectId,
		ref : 'Attack'
	}]
});

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

export default Pokemon;
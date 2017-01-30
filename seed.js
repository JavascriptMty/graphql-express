import mongoose from 'mongoose';
import {
	Category,
	Attack,
	Pokemon
} from './models';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/pokemons');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Oh crap'));
db.once('open', () => console.log("open"));

let category = new Category({ name: 'Grass' });
category.save()
	.then( (data)=> {
		let attack = new Attack({ name : "Leaf Blade", category : category });
		return attack.save();
	})
	.then((attack)=> {
		let pokemon = new Pokemon({ name : "Bulbasaur",
			number: 1, attacks : [attack], categories : [category]});
		return pokemon.save()
	})
	.then((pokemon)=>{
		return "Seed finish"
	})
	.catch((err)=>{
		console.log(err);
	});

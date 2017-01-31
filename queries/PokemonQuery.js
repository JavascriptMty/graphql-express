import { Pokemon } from '../models';
import { PokemonType } from '../types';
import { 
	GraphQLList,
	GraphQLID,
	GraphQLString
} from 'graphql';
import utils from '../utils';

const pokemons = {
	type: new GraphQLList(PokemonType),
	args: {
		id: {
			name: 'id',
			type: GraphQLID
		},
		name: {
			name: 'name',
			type: GraphQLString
		}
	},
	resolve: (source, args, root, asts) => {
		let filters = utils.processArgs(args);
		return Pokemon
			.find(filters);
			
	}
};

export default pokemons;
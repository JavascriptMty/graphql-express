import { Pokemon } from '../models';
import { PokemonType } from '../types';
import { GraphQLList } from 'graphql';

const pokemons = {
	type: new GraphQLList(PokemonType),
	resolve: (source, args, root, asts) => {
		return Pokemon
			.find();
			
	}
};

export default pokemons;
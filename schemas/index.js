import { 
	CategoryQuery,
	AttackQuery,
	PokemonQuery
} from '../queries';
import {
	CategorySave
} from '../mutations';
import { 
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql';


const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
	attacks : AttackQuery,
	pokemons : PokemonQuery,
	categories : CategoryQuery
  })
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
  	categorySave : CategorySave
  }
});

export default new GraphQLSchema({
	query : query,
	mutation : mutation
});
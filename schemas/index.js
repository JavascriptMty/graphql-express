import { 
	CategoryQuery,
	AttackQuery,
	PokemonQuery
} from '../queries';
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

export default new GraphQLSchema({
	query : query
});
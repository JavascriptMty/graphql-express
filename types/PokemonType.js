import {
	Category,
	Attack,
	Pokemon
} from '../models';
import CategoryType from './CategoryType';
import AttackType from './AttackType';
import { 
	GraphQLObjectType, 
	GraphQLID, 
	GraphQLInt, 
	GraphQLString,
	GraphQLList
} from 'graphql';
import utils from '../utils';

const PokemonType = new GraphQLObjectType({
	name : 'pokemon',
	fields : () => ({
		id : {
			type : GraphQLID
		},
		name : {
			type : GraphQLString
		},
		number : {
			type : GraphQLInt
		},
		attacks : {
			type : new GraphQLList(AttackType),
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
			resolve: (pokemon, args, root, asts) => {
				let filters = utils.processArgsInCollection(pokemon.attacks, args);
				return Attack.find(filters);
			}
		},
		categories : {
			type : new GraphQLList(CategoryType),
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
			resolve: (pokemon, args, root, asts) => {
				let filters = utils.processArgsInCollection(pokemon.categories, args);
				return Category.find(filters);
			}
		},
		preEvolution : {
			type : PokemonType,
			resolve: (pokemon) => {
				return Pokemon.findOne({
					_id: pokemon.preEvolution.toString()
				});
			}
		},
		evolution : {
			type : PokemonType,
			resolve: (pokemon) => {
				return Pokemon.findOne({
					_id: pokemon.evolution.toString()
				});
			}
		}
	})
});

export default PokemonType;
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
		attack : {
			type : new GraphQLList(AttackType),
			resolve: (pokemon) => {
				return Attack.find({
					_id: {
						$in: pokemon.attacks.map((id) => id.toString())
					} 
				});
			}
		},
		categories : {
			type : new GraphQLList(CategoryType),
			resolve: (pokemon) => {
				return Category.find({
					_id: {
						$in: pokemon.categories.map((id) => id.toString())
					} 
				});
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
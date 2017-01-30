import { Category } from '../models';
import CategoryType from './CategoryType';
import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const AttackType = new GraphQLObjectType({
	name : 'attack',
	fields : () => ({
		id : {
			type : GraphQLID
		},
		name : {
			type : GraphQLString
		},
		category : {
			type : CategoryType,
			resolve: (attack) => {
				return Category.findOne({
					_id: attack.category.toString()
				});
			}
		}
	})
});

export default AttackType;
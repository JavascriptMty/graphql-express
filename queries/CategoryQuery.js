import { Category } from '../models';
import { CategoryType } from '../types';
import { 
	GraphQLList,
	GraphQLID,
	GraphQLString
} from 'graphql';
import utils from '../utils';

const categories = {
	type: new GraphQLList(CategoryType),
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
		return Category
			.find(filters);
	}
};

export default categories;
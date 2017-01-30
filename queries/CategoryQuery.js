import { Category } from '../models';
import { CategoryType } from '../types';
import { GraphQLList } from 'graphql';

const categories = {
	type: new GraphQLList(CategoryType),
	resolve: (source, args, root, ast) => {
		return Category
			.find();
	}
};

export default categories;
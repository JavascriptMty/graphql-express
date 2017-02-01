import { 
	CategoryType, 
	CategoryInputType 
} from '../types';
import { Category } from '../models';

const mutationAdd = {
	name : 'CategorySave',
	type: CategoryType,
	args: {
		category: { type: CategoryInputType }
	},
	resolve (source, args, root, asts) {
		let category = new Category(args.category);
		return category.save();
	}
};

export default mutationAdd;

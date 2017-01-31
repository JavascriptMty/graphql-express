import { Attack } from '../models';
import { AttackType } from '../types';
import { 
	GraphQLList,
	GraphQLID,
	GraphQLString
} from 'graphql';
import utils from '../utils';

const attacks = {
	type: new GraphQLList(AttackType),
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
		return Attack
			.find(filters);
	}
}

export default attacks;
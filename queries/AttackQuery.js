import { Attack } from '../models';
import { AttackType } from '../types';
import { GraphQLList } from 'graphql';

const attacks = {
	type: new GraphQLList(AttackType),
	resolve: (source, args, root, asts) => {
		return Attack
			.find();
	}
}

export default attacks;
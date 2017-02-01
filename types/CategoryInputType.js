import { 
	GraphQLInputObjectType, 
	GraphQLNonNull, 
	GraphQLID, 
	GraphQLString 
} from 'graphql';

const CategoryInputType = new GraphQLInputObjectType({
	name : 'CategoryInput',
	fields : {
		id : {
			type : GraphQLID
		},
		name : {
			type : new GraphQLNonNull(GraphQLString)
		},
		image : {
			type : new GraphQLNonNull(GraphQLString)
		}
	}
});

export default CategoryInputType;
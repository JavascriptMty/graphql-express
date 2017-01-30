import { 
	GraphQLObjectType, 
	GraphQLID, 
	GraphQLString
} from 'graphql';

const CategoryType = new GraphQLObjectType({
	name : 'category',
	fields : () => ({
		id : {
			type : GraphQLID
		},
		name : {
			type : GraphQLString
		},
		image : {
			type : GraphQLString
		}
	})
});

export default CategoryType;
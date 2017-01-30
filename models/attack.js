import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AttackSchema = new Schema({
	name : String,
	category : {
		type : Schema.Types.ObjectId,
		ref : 'Category'
	}
});

const Attack = mongoose.model('Attack', AttackSchema);

export default Attack;
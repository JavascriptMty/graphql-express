import { Promise } from 'bluebird'
import mongoose from 'mongoose';

mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	name : String,
	image : String
});

const Category = mongoose.model('Category', CategorySchema);

export default Category;
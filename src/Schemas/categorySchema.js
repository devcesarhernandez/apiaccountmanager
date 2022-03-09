import mongoose from "mongoose"
const { Schema, model } = mongoose

const categorySchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	description: {
		type: String,
		trim: true
	}
})

export default model(categorySchema)
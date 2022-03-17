import mongoose from "mongoose"
const { Schema, model, ObjectId } = mongoose

const accountSchema = new Schema({
	userId: {
		type: ObjectId,
		required: true
	},
	email: {
		type: String,
		required: true,
		maxLength: 60,
		index: true
	},
	password: {
		type: String,
		required: true
	},
	platformId: {
		type: ObjectId,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},
	delete: {
		type: Date,
		default: null
	}
})

export default model("Account", accountSchema)
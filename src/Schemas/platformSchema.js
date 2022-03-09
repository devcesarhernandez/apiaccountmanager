import mongoose from "mongoose"
const { Schema, model, ObjectId } = mongoose

const platformSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		maxLength: 50
	},
	utl: {
		type: String,
		required: true,
		maxLength: 60
	},
	icon: {
		type: Buffer,
		required: true
	},
	category: {
		type: ObjectId,
		required: true
	}
})

export default model(platformSchema)
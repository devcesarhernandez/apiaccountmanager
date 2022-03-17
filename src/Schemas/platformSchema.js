import mongoose from "mongoose"
const { Schema, model, ObjectId } = mongoose

const platformSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		maxLength: 50
	},
	url: {
		type: String,
		required: true,
		maxLength: 60
	},
	icon: {
		data: Buffer,
		contentType: String,
	},
	category: {
		type: ObjectId,
		required: true
	}
})

export default model("Platform", platformSchema)
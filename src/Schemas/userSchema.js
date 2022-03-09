import mongoose from "mongoose"
const { Schema, model } = mongoose

const userSchema = new Schema({
	name: {
		type: String,
		required: [true, "Es necesario tú nombre."],
		trim: true,
		maxLength: 50
	},
	lastName: {
		type: String,
		required: [true, "Proporciona un apellido."],
		trim: true,
		maxLength: 50
	},
	userName: {
		type: String,
		required: [true, "Proporcina un nombre de usuario."],
		maxLength: [15, "El nombre de usuario no debe de exceder de 15 caracteres."],
		trim: true,
		unique: true,
		index: true
	},
	email: {
		type: String,
		required: [true, "El campo email es necesario"],
		maxLength: [50, "El email no debe exceder los 50 caracteres."],
		trim: true,
		unique: true,
		index: true
	},
	password: {
		type: String,
		required: [true, "La contraseña es necesaria."]
	},
	decrypt: {
		type: String
	},
	verifyHash: {
		type: String,
		unique: true
	},
	active: {
		type: Boolean,
		default: false
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},
	deleteAt: {
		type: Date,
		default: null
	}
})

export default model(userSchema)
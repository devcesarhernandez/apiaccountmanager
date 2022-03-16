import { saveUser, searchByParams } from "../../Models/UserModel"
import encryptPass from "../../Libraries/Encrypted"
import jwt from "../../Libraries/JWT"

export default async (req, res, next) => {
	try {
		const user = await createUserData( req.body )
		const newUser = await saveUser(user)
		res.status(200).json({
			ok: true,
			message: "Register successfuly.",
			payload: {name: user.name, userName: user.userName, email: user.email, verifyHash: user.verifyHash},
			newUser
		})
	} catch (error) {
		res.status(200).json({
			ok: false,
			message: "Error in register user.",
			error: error.message
		})
	}
}

const isConfirmPassword = ( password, confirmPassword ) => {
	if ( password != confirmPassword ) throw new Error("Las contraseñas no coinciden.")
}

const userAvailable = async ( userName, email ) => {
	const users = await searchByParams({userName, email}, true)
	if ( users.length > 0 ) throw new Error(`El nombre de usuario o email no estan disponibles.`)
}

const createUserData = async ( data ) => {
	const { name, lastName, userName, email, password, confirmPassword } = data
	isConfirmPassword( password, confirmPassword )
	await userAvailable( userName, email )
	const passwordHash = await encryptPass.hashPassword(password)
	const verifyHash = await jwt.sign({email, userName})
	return {
		name,
		lastName,
		userName,
		email,
		password: passwordHash,
		verifyHash
	}
}
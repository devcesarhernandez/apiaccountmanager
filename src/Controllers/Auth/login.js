import { getOneUserByParam } from "../../Models/UserModel"
import encryptPass from "../../Libraries/Encrypted"
import jwt from "../../Libraries/JWT"

export default async (req, res, next) => {
	try {
		const { userName, password } = req.body
		const user = await getUserName(userName)
		isDelete(user)
		isActive(user)
		await isMatch(password, user)
		const token = await genToken(user)
		res.status(201).json({
			ok: true,
			message: "Authenticate successfuly.",
			payload: token
		})
	} catch (error) {
		res.status(200).json({
			ok: false,
			message: "Error al iniciar sesión.",
			error,
			messageError: error.message
		})
		//next(error)
	}
}

async function getUserName(userName) {
	const user = await getOneUserByParam({userName})
	if ( !user ) throw new Error("Usuario no encontrado.")
	return user
}

async function isMatch(password, user) {
	const isMatch = await encryptPass.verifyPassword(password, user.password)
	if ( !isMatch ) throw new Error("Credenciales invalidas.")
	return isMatch
}

function isDelete(user) {
	if ( user.deleteAt ) throw new Error("Usuario eliminado.")
	return false
}

function isActive(user) {
	if ( !user.active ) throw new Error("Activa tú cuenta.")
	return user.active
}

async function isActiveVerifyHash(user) {
	return await jwt.verify(user.verifyHash)
}

async function genToken(user) {
	return await jwt.sign({
		sub: user.email,
		id: user._id
	})
}
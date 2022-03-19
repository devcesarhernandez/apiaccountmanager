import { update } from "../../Models/UserModel"
import encryptPass from "../../Libraries/Encrypted"

export default async (req, res, next) => {
	try {
		const { userId } = req.body
		const userUpdateData = await createData( req.body )
		const userUpdated = await update(userId, userUpdateData)
		res.status(200).json({
			ok: true,
			message: "User updated.",
			payload: userUpdated
		})
	} catch (error) {
		res.status(500).json({
			ok: false,
			message: "Error in server.",
			error
		})
	}
}


const createData = async ( body ) => {
	const datos = [ "name", "lastName", "userName", "email", "password" ]
	const data = datos.reduce( (accum, key) => body[key] ? {...accum, [key]: body[key]} : accum,  {})
	if ( data.password ) data.password = await encryptPass.hashPassword(data.password)
	return data
}
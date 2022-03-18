import { update } from "../../Models/AccountModel"
import crypto from "../../Libraries/Encrypted/crypto"

export default async (req, res, next) => {
	try {
		const accountUpdate = createData( req.body )
		const accountUpdated = await update( accountUpdate )
		res.status(200).json({
			ok: true,
			message: "Account updated successfuly.",
			payload: accountUpdated
		})
	} catch (error) {
		res.status(500).json({
			ok: false,
			message: "Error in server.",
			error
		})
	}
}

const createData = ( body ) => {
	const { email, password, platformId } = body
	let data = { email, platformId }
	if ( password ) data.password = crypto.encrypt( password )
	return data
}
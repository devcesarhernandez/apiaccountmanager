import { saveAccount } from "../../Models/AccountModel"
import crypto from "../../Libraries/Encrypted/crypto"

export default async (req, res, next) => {
	try {
		const account = createData( req.body )
		const newAccount = await saveAccount( account )
		res.status(200).json({
			ok: true,
			message: "Account created successfuly.",
			payload: newAccount
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
	const { userId, email, password, platformId } = body
	const passwordHash = crypto.encrypt( password )
	return {
		userId,
		email,
		password: passwordHash,
		platformId
	}
}
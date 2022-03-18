import { getById } from "../../Models/AccountModel"
import crypto from "../../Libraries/Encrypted/crypto"

export default async (req, res, next) => {
	try {
		const { id } = req.params
		const account = await getById(id)
		const passwordDecrypt = crypto.decrypt( account.password )
		res.status(200).json({
			ok: true,
			message: "Password decrypt.",
			payload: passwordDecrypt
		})
	} catch (error) {
		res.status(500).json({
			ok: false,
			message: "Error in server.",
			error
		})
	}
}
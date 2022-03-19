import { deleteById } from "../../Models/UserModel"
import {deleteAllAccountsByUserId} from "../../Models/AccountModel"

export default async(req, res, next) => {
	try {
		const { userId } = req.body
		const userDeleted = await deleteById( userId )
		await deleteAllAccountsByUserId(userId)
		res.status(200).json({
			ok: true,
			message: "User deleted.",
			payload: userDeleted
		})
	} catch (error) {
		res.status(200).json({
			ok: false,
			message: "Error in server.",
			error
		})
	}
}
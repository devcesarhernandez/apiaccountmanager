import { deleteById } from "../../Models/AccountModel"

export default async (req, res, next) => {
	try {
		const { id } = req.params
		const accountDeleted = await deleteById(id)
		res.status(200).json({
			ok: true,
			message: "Account deleted.",
			payload: accountDeleted
		})
	} catch (error) {
		res.status(200).json({
			ok: false,
			message: "Error in server.",
			error
		})
	}
}
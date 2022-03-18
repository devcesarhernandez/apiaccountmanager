import { getAllAccountsByUserId } from "../../Models/AccountModel"

export default async ( req, res, next ) => {
	try {
		const { userId } = req.body
		const accounts = await getAllAccountsByUserId( userId )
		res.status(200).json({
			ok: true,
			message: "All accounts",
			payload: accounts
		})
	} catch (error) {
		res.status(200).json({
			ok: false,
			message: "Error in server.",
			error
		})
	}
}
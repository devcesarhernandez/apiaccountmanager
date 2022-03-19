import { getById } from "../../Models/UserModel"

export default async (req, res, next) => {
	try {
		const { userId } = req.body
		const user = await  getById( userId )
		res.status(200).json({
			ok: true,
			message: "All info user.",
			payload: user
		})
	} catch (error) {
		res.status(500).json({
			ok: false,
			message: "Error in server.",
			error
		})
	}
}
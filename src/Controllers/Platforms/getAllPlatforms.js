import { getAllPlatforms } from "../../Models/PlatformModel"

export default async (req, res, next) => {
	try {
		const platforms = await getAllPlatforms()
		res.status(200).json({
			ok: true,
			message: "Get all platforms.",
			payload: platforms
		})
	} catch (error) {
		res.status(501).json({
			ok: false,
			message: "Error in server.",
			error
		})
	}
}
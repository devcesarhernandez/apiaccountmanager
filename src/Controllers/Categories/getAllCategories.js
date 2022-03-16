import {getAllCategories} from "../../Models/CategoryModel"

export default async (req, res, next) => {
	try {
		const categories = await getAllCategories()
		res.status(200).json({
			ok: true,
			message: "All categories.",
			payload: categories
		})
	} catch (error) {
		res.status(501).json({
			ok: false,
			message: "Error in get all categories.",
			error
		})
	}
}
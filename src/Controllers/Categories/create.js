import { saveCategory } from "../../Models/CategoryModel"

export default async (req, res, next) => {
	try {
		const category = createDataCategory( req.body )
		const newCategory = await saveCategory(category)
		res.status(200).json({
			ok: true,
			message: "Category create successuly.",
			payload: newCategory
		})
	} catch (error) {
		res.status(201).json({
			ok: false,
			message: "Error",
			error
		})
	}
}

const createDataCategory = ( body ) => {
	return {
		name: body.name,
		description: body.description
	}
}
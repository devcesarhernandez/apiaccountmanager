import { savePlatform } from "../../Models/PlatformModel"
import fs from "fs"
import path from "path"

export default async (req, res, next) => {
	try {
		const platform = createDataPlatform( req.body, req.file )
		const newPlatform = await savePlatform(platform)
		res.status(200).json({
			ok: true,
			message: "Platform created successfuly.",
			payload: newPlatform
		})
	} catch (error) {
		res.status(501).json({
			ok: false,
			messeage: "Error in server.",
			error
		})
	}
}

const createDataPlatform = ( body, file ) => {
	const img = fs.readFileSync( file.path )
	const imgEncode = img.toString("base64")
	return {
		name: body.name,
		url: body.url,
		icon: {
			data: new Buffer.from(imgEncode, "base64"),
			contentType: file.mimetype
		},
		category: body.category
	}
}
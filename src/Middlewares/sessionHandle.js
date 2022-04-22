import jwt from "../Libraries/JWT"

export default async (req, res, next) => {
	try {
		const token = req.headers?.token
		if ( token ) {
			const info = await jwt.verify( token )
			req.body.userId = info.id
		} else {
			req.body.userId = -1
		}
		next();
	} catch ( err ) {
		next(err)
	}
}
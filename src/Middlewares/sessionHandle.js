import { verify } from "..//Libraries/JWT"

export default async (req, res, next) => {
	try {
		const token = req.headers?.token
		if ( token ) {
			const info = await verify( token )
			req.body.idUserSession = info.sub
		} else {
			req.body.idUserSession = -1
		}
		next();
	} catch ( err ) {
		next(err)
	}
}
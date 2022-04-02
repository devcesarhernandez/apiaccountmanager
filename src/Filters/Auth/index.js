import jwt from "../../Libraries/JWT"

export default {
	isLoggedIn: async (req, res, next) =>  {
		try{
			const token = req.headers?.token;
			if ( !token ) throw new Error("No logged in.")
			await jwt.verify( token );
			next()
		} catch (err) {
			res.status(403).json({
				message: err.message,
				err: 403
			})
		}
	}
}
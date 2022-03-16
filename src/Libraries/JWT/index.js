import jsonwebtoken from "jsonwebtoken"
import env from "../../Config/env"

export default {
	sign: async ( data ) => {
		return await jsonwebtoken.sign( data, env.SECRET, { expiresIn: "1h" } )
	},

	verify: async ( token ) => {
		return await jsonwebtoken.verify( token, env.SECRET )
	}
}
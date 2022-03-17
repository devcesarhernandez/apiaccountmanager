import CryptoJs from "crypto-js"
import env from "../../Config/env"

export default {
	encrypt: ( text ) => {
		return CryptoJs.AES.encrypt(text, env.SECRET).toString()
	},
	decrypt: ( hash ) => {
		const bytes = CryptoJs.AES.decrypt(hash, env.SECRET)
		return bytes.toString(CryptoJs.enc.Utf8)
	}
}
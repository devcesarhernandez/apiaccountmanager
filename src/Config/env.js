import "dotenv/config";

export default {
	PORT: process.env['PORT'],
}

export const database = {
	URI: `mongodb+srv://${process.env["DB_USER"]}:${process.env["DB_PASS"]}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
}

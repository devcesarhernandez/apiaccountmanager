import express from "express";
import env from "./Config/env";

const app = express();

// Database connection.
import "./Libraries/DB";

app.get("/", (req, res) => {
	res.send({
		message: "Hola mundo",
	});
})

app.listen(env.PORT, _ => console.log("Server running",env.PORT));
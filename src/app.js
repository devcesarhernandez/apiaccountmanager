import express from "express";
import env from "./Config/env";

const app = express();

app.get("/", (req, res) => {
	res.send({
		message: "Hola mundo",
	});
})

app.listen(env.port, _ => console.log("Server running",env.port));
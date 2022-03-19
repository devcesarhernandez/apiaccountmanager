import express from "express";
import env from "./Config/env";
import Routes from "./Routes";
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// Database connection.
import "./Libraries/DB";

app.get("/", (req, res) => {
	res.send({
		message: "Hola mundo",
	});
})
Routes(app);

app.listen(env.PORT, _ => console.log("Server running",env.PORT));
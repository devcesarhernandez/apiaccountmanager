import express from "express"
const router = express.Router()
import register from "../../Controllers/Auth/register"
import login from "../../Controllers/Auth/login"

router.post("/signin", login)

router.post("/signup", register)

router.get("/auth", (req, res) => res.send({message: "Data login"}))

export default router;

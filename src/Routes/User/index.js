import express from "express"
import getInfo from "../../Controllers/Users/getInfo"
import update from "../../Controllers/Users/update"
import deleteUser from "../../Controllers/Users/delete"
const router = express.Router()

router.get("/", getInfo)
router.patch("/", update)
router.delete("/", deleteUser)

export default router
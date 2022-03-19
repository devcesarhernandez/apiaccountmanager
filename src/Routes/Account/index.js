import express from "express"
import create from "../../Controllers/Accounts/create"
import update from "../../Controllers/Accounts/update"
import deleted from "../../Controllers/Accounts/delete"
import decrypt from "../../Controllers/Accounts/decryptPassword"
import getAllAccountsByUserId from "../../Controllers/Accounts/getAllAccountsByUserId"
const router = express.Router()

router.get("/", getAllAccountsByUserId)
router.get("/:id", decrypt)
router.post("/", create)
router.patch("/", update)
router.delete("/:id", deleted)

export default router
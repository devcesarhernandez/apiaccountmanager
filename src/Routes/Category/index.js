import express from "express"
const router = express.Router()
import create from "../../Controllers/Categories/create"
import getAllCategories from "../../Controllers/Categories/getAllCategories"

router.post("/", create)
router.get("/", getAllCategories)

export default router
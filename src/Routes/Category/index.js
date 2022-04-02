import express from "express"
const router = express.Router()
import create from "../../Controllers/Categories/create"
import getAllCategories from "../../Controllers/Categories/getAllCategories"
import Auth from "../../Filters/Auth"

router.post("/", Auth.isLoggedIn, create)
router.get("/", Auth.isLoggedIn, getAllCategories)

export default router
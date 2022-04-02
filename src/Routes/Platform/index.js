import express from "express"
const router = express.Router()
import getAllPlatforms from "../../Controllers/Platforms/getAllPlatforms"
import create from "../../Controllers/Platforms/create"
import upload from "../../Helpers/Upload"
import Auth from "../../Filters/Auth"


router.get("/", Auth.isLoggedIn, getAllPlatforms)
router.post("/", Auth.isLoggedIn, upload.single("icon"), create)

export default router
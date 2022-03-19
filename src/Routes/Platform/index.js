import express from "express"
const router = express.Router()
import getAllPlatforms from "../../Controllers/Platforms/getAllPlatforms"
import create from "../../Controllers/Platforms/create"
import upload from "../../Helpers/Upload"

router.get("/", getAllPlatforms)
router.post("/", upload.single("icon"), create)

export default router
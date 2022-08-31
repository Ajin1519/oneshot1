import express from "express"
import oneshotController from "./onshot.controller.js"
const router = express.Router()

router.route("/").get(oneshotController.apiGetOneshot)

export default router
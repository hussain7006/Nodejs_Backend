import { Router } from "express";
import {
    registerUser, loginUser,
    mapImageUpload,
    logoutUser
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";




const router = Router()

router.route("/mapImageUpload").post(
    upload.fields([
        {
            name: "mapImage",
            maxCount: 1
        }
    ])
    , mapImageUpload)

// router.route("/register").post(registerUser)
router.route("/register").post(
    upload.fields([
        {
            name: "mapImage",
            maxCount: 1
        }
    ])
    , registerUser)


router.route("/login").post(loginUser)

// secured routes
router.route("/logout").post(verifyJWT, logoutUser)

export default router
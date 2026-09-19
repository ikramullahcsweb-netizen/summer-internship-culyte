import express from "express";
import {
  signup,
  login,
  profile,
  adminDashboard,
} from "../controllers/authController.js";
import verifyJWT from "../middlewares/authMiddleware.js";
import roleAuthorization from "../middlewares/roleMiddleware.js";
import verifySignup from "../middlewares/verify_signup.js";
import accountStatus from "../middlewares/account_status.js";

const router = express.Router();

router.post("/signup", verifySignup, signup);

router.post("/login", login);

router.get("/profile", verifyJWT, accountStatus, profile);

router.get(
  "/admin",
  verifyJWT,
  accountStatus,
  roleAuthorization("admin"),
  adminDashboard
);

export default router;
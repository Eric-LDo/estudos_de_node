import express from "express";
import produtos from "./produtos";
import ping from "./ping";
const router = express.Router();

router.use("/produtos", produtos);
router.use("/ping", ping);

export default router;
import express from "express";

const router = express.Router()

router.get("/", (req, res)=>{
    res.json({mensagem:"pong"})
})
export default router;

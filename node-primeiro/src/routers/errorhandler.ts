import { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundRequest:RequestHandler=(req, res) =>{
    res.status(404).json({mensagem:"Rota não encontrada"});
}

export const errorHandler: ErrorRequestHandler = (err, req, res, next) =>{
    console.log(err)
    res.status(500).json({
        error: "internal server error"
    })
}
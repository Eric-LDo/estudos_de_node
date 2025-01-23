import  express  from "express";
import helmet from "helmet";
import path from "path";
const server = express();
server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(express.static(path.join(__dirname, "../public")))
server.get("/ping", (req, res)=>{
    res.json({mensagem:"pong"})
})
server.get("/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.json({id});

})

server.listen(3333,()=>{
    console.log("Server is running on port 3333");
})
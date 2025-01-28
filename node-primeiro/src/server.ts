import  express  from "express";
import helmet from "helmet";
import path from "path";
import router from "../src/routers";
import { errorHandler, notFoundRequest } from "./routers/errorhandler";


const server = express();
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static(path.join(__dirname, "../public")));
server.use('/', router);
server.use(notFoundRequest);
server.use(errorHandler)



server.listen(3333,()=>{
    console.log("Server is running on port 3333");
})
import express, { Application, Request, Response, NextFunction } from "express"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import "dotenv/config"
import Connect  from './Models/connect';


import privatePersonRoutes   from "./Routes/privatePerson.routes"
import passHistory from "./Routes/passHistory.routes"
import signIn  from "./Routes/signIn.routes"
import signOut from "./Routes/signOut.routes"
import dashBoard from "./Routes/dashBoard.routes"
 


const app: Application = express()
const db = "mongodb://localhost:27017/security-intelligence"


app.use(cors())
app.use(helmet())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req: Request, res: Response) => {
  res.send("TS App is Running")
})

Connect({ db })
privatePersonRoutes( { app })
passHistory({app})
signIn({app})
signOut({app})
dashBoard({app})

app.listen(process.env.PORT, () => {
  // logger.info(`API Listening on port: ${process.env.NODE_ENV} as ${process.env.NODE_ENV}`)
  console.log(`server is running on PORT ${process.env.PORT}`)
})
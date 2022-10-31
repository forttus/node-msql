import express from "express";

import employeesRouter from "./routes/employes.routes.js";
import indexRoutes from "./routes/index.routes.js";

import './config.js'

const app = express()

app.use(express.json())


app.use('/api',employeesRouter)
app.use('/api',indexRoutes)

app.use((req, res)=>{
    res.status(400).json({
        message: 'Endpoint not found'
    })
})

export default app
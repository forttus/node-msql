import { Router } from "express";
import { getEmployees, postEmployees, putEmployees, deleteEmployees, deleteEmployee } from "./controllers/employees.controller.js";

const router = Router()

router.get('/employees', getEmployees)
router.post('/employees', postEmployees)
router.patch('/employees/:id', putEmployees)
router.delete('/employees/:id', deleteEmployees)
// extraendo una sola dupla 
router.get('/employees/:id', deleteEmployee)

export default router
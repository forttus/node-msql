import { poll } from "../../db.js"

export const getEmployees = async(req, res)=>{
    try {
        const [rows] = await poll.query('SELECT * FROM employed order by id desc')
        res.json(rows)   

    } catch (error) {
        return res.status(500).json({
            message: 'error en la conexion de base de datos'
        })
    }
    
}

export const postEmployees = async (req, res)=>{
    const {name, salary} = req.body

    try {        
        const [rows] = await poll.query('INSERT INTO employed(name, salarary) VALUES (?,?)',[name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary
        })    
    } catch (error) {
        return res.status(500).json({
            message: 'error en la conexion de base de datos'
        })
    }
    
}

// exyendo una dubla de la tabla empleados
export const deleteEmployee = async (req, res)=>{
    const {id} = req.params
try {
    
} catch (error) {
    
}
    const [rows] = await poll.query('select * from employed where id=?',[id])
    if (rows.length <= 0) {
        return res.status(404).json(
            {message: 'El empleado no existe'}
        )
    }

    res.json(rows[0])
}



export const putEmployees = async (req, res)=>{
    const {id} = req.params
    const {name, salary} = req.body

    const [ result ] = await poll.query('update employed set name = IFNULL(?, name), salarary= IFNULL(?, salarary) where id=?',[name, salary, id])
    
    if (result.affectedRows === 0) {
        return res.status(404).json(
            {message: 'El empleado no pudo ser actualizado'}
        )
    }
    
    const [ rows ] = await poll.query('select * from employed where id=?',[id])
    
    res.json(rows[0])
    
}



export const deleteEmployees = async(req, res)=>{
    const {id} = req.params
    const [result] = await poll.query('DELETE FROM employed Where id=?',[id])
    if (result.affectedRows <= 0) {
        return res.status(404).json(
            {message: 'El empleado que desea eliminar no existe'}
        )
    }
    console.log(result);
    res.send('Empleado Eliminado')
}
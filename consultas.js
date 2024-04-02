// Requerimiento N° 2 - Usando el paquete pg para interactuar con la base de datos
import paquete from 'pg';
const { Pool } = paquete;
import {config} from 'dotenv';

config();

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,    
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    allowExitOnIdle: true
})

const agregarPost = async (titulo, url, descripcion) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3)"
    const values = [titulo, url, descripcion]
    const result = await pool.query(consulta, values)
    console.log("Post agregado con éxito")
}

const getPosts = async () => {
    const { rows } = await pool.query("SELECT * from posts");
    console.log(rows);
    return rows;
}

export { agregarPost, getPosts }


// Requerimiento N° 1:  Se habilitaron CORS por consola con el comando npm i cors

import { agregarPost, getPosts } from './consultas.js'
import express, { json } from 'express';
const app = express();
import cors from 'cors';

app.use(json());
app.use(cors());

app.listen(3000, () => console.log('SERVIDOR ENCENDIDO 👍'));

// Requerimiento N° 3 - Ruta GET para devolver registros de una tabla de PostgreSQL

app.get("/posts", async (req, res) => {  
    const posts = await getPosts()
    res.json(posts)
})

// Requerimiento N° 4 - Ruta POST para recibir y almacenar registros nuevos.

app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body
    await agregarPost(titulo, url, descripcion)
    res.send("Post agregado con éxito")
})
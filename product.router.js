import express from 'express'
import { supabase } from './db.js'
import { getAllUsers } from './db.js'

const products = express()

products.use(express.json())

async function login(req,res,next){
const { name, password } = req.body
    const users = await getAllUsers()
    let bool = false
    for (let user of users) {
        if (user.name === name && String(user.password) === password) {
            bool = true
        }
    }
    if (bool === false) {
        res.status(401)
        res.json({ "false": "user not exist" })
    } else {
        // res.json({ "true": "Login successful" })
        next()
    }
}

products.post("/login",login)

products.get("/products",login, async (req, res) => {
    const {data, error } = await supabase
        .from('products')
        .select()
        res.send(data.length)
})

products.listen(3000, () => {
    console.log("server run");
})
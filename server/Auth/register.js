const express = require("express");
const register = express.Router();
const user = require("./userSchema")

register.post("/", async (req, res) => {
    const username = req.body.username.toLowerCase()
    const password = req.body.password
   
  
    try {
        
        const find = await user.find({ username: `${username}` }).lean().select('username').exec()
        if (find.length > 0) {
            res.status(400).send({message: `${username} already exists`})
            return
    }
    
    const createUser = new user({
            username: username,
            password: password
        });
        const savedUser = await createUser.save();
        res.send({message: "User created!"})
    } catch (err) {
        console.log("kallesssss")
        res.send(err)
    }
})

module.exports = register
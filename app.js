const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "./public")))


/* app.listen(3000, ()=> console.log("Server corriendo en puerto 3000")) */
const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log("Server corriendo en puerto ${port}"));


app.get("/", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/home.html")))

app.get("/register", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/register.html")))

app.get("/login", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/login.html")))

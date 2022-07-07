
// npm init -y    
// npm i express
// npm install -g nodemon -D
//> npm run dev -> para levantar servidor

const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.json({users: ["Fran", "Simon", "Maria", "Joe"] })
})

app.get("/hola", (req, res) => {
  res.json({ pets: ["perro", "gato", "luciérnaga", "ratón"] });
});

app.listen(5000, () => {console.log('Server started on port 5000')  })


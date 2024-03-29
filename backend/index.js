const express = require ('express')
const reds = require('redis')

const app = express()

const client = reds.createClient()
client.set('visits', 0)

app.get('/', (req,res) =>{
    client.get('visits', (err, visits)=>{
        res.send(`No of visits : ${{visits}}`)
        client.set('visits', parseInt(visits)+1)
    })
})

app.listen(8080, () => {
    console.log("Server is running at port 8080")
})
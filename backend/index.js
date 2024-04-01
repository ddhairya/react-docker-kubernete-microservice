const express = require ('express')
const redis = require('redis')

const app = express()

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    retry_strategy: () => 1000,

})
client.set('visits', 0)

app.get('/', (req,res) =>{
    client.get('visits', (err, visits)=>{
        res.send(`No of visits : ${visits}`)
        client.set('visits', parseInt(visits)+1)
    })
})

app.listen(8081, () => {
    console.log("Server is running at port 8081")
})
const express = require('express');
const cors = require('cors')
const server = express();
// const url = 'localhost'
const port = process.env.PORT || 3000
server.use(cors())
server.get('/resp',(req,res)=>{
let data = randomMeow();
console.log('req arrived')
res.json({
    msg : data
})

})
server.listen(port,()=>{
    console.log(`server is up,on port:${port}`)
})

function randomMeow(){
    let resLen = Math.floor(Math.random() * 10) + 5;
    let msg = '🐱 meow ';
    for(let i = 0 ; i<resLen ; i++)
    msg = msg + 'meow '
    return msg;
}


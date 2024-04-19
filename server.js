const express = require('express');
const app=express()
const port = process.env.PORT || 3000;

let concurrentRequests = 0

app.get('/', (req, res)=>{
    console.log("pinged")
    concurrentRequests++;
    setTimeout(() => {
        res.send("Response delayed due to high load");
        concurrentRequests--
    }, concurrentRequests*100);
})

app.listen(port, ()=> {
    console.log(`example app listening at port ${port}`)
})
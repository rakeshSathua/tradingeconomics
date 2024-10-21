const express = require('express');
const te = require('tradingeconomics');


const app = express();

app.listen(8000, () => {
    
    console.log("Server running on Port 8000");

});


app.get("/", async (req, res) => {
    try {

        await te.login();
        const data = await te.getCalendar();  
        console.log(data); 
        res.json({msg : "Success"});

      } catch (e) {

        console.log(`Error: ${e}`);
        res.json({msg : "Failed"});

      }
});
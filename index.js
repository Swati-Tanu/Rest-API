const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000

app.get("/", (req,res) => {
    res.send("Home Page from Backend Side")
});

const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log(`Server running at ${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
};

start()

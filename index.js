const express = require("express");
const app = express();
const axios = require("axios");
require('dotenv').config()

app.get("/", async (req, res) => {
	try {
        let requestData = {
            method: 'get',
            url: process.env.URL,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Authorization': req.headers.authorization,
                'Accept': 'application/json'
            },

        };

        let response = await axios(requestData);
		res.send(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
})



app.listen(2400, () => {console.log("Server started at port 2400")});
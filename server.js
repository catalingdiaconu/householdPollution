const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios')

const app = express();
const appPort = 5000;

// Enable CORS for all routes
app.use(cors());

// Enable body-parser for JSON. This will let you access POST data as JSON.
app.use(bodyParser.json());

app.post('/run-command', async (req, res) => {
    console.log(req.body); // This will log the POST data to the console.

    try {
        const response = await axios.post('http://192.168.20.125:5000/run-command', req.body);

        // Forward the response from the target server back to the client.
        res.json(response.data);
    } catch (error) {
        console.error("Error making request to target server:", error);

        // Respond with an error status and message
        res.status(500).json({
            status: "error",
            message: "Failed to make request to target server"
        });
    }
});

app.listen(appPort, () => {
    console.log(`Server started on http://localhost:${appPort}`);
});
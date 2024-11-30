const express = require('express');
const path = require('path');
const fs = require('fs');

const endPointImages = express.Router();

// GET
endPointImages.get('/static/:filename', (req, res) => {
    const filename = req.params.filename; // Get the filename from the request
    const filePath = path.join(__dirname, 'static', filename); // Full file path
    const fallbackPath = path.join(__dirname, 'static', 'blank.jpg'); // Path to blank.jpg

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.warn(`File not found: ${filename}. Serving blank.jpg instead.`);
            return res.sendFile(fallbackPath);
        }

        res.sendFile(filePath);
    });
});

module.exports = endPointImages;
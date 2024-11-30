const express = require('express');
const path = require('path');
const fs = require('fs');

const endPointImages = express.Router();

// GET
endPointImages.get('/static/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'static', filename);
    const fallbackPath = path.join(__dirname, 'static', 'blank.jpg');

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.sendFile(fallbackPath);
        }

        res.sendFile(filePath);
    });
});

module.exports = endPointImages;
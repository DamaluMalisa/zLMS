const express = require('express');
const app = express();

// Serve static files from the "dist" directory
app.use(express.static('dist/hexadash'));

// Redirect all requests to the "index.html" file
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/hexadash/index.html');
});

// Start the server
const port = 3000; // You can change this port number if needed
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

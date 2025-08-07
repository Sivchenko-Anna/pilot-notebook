const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // need for tests

const user = {
  first_name: "Anna",
  username: "anna_telegram"
};

// endpoint /api/user
app.get('/api/user', (req, res) => {
  res.json(user);
});

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`start the server on http://localhost:${PORT}`);
})
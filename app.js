require('dotenv').config();
const express = require('express');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();
app.use(express.json());  // For JSON request body

app.use('/api', expenseRoutes);  // All routes start with /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

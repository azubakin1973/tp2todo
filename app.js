const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

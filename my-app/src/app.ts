import express from 'express';
import copayRouter from './routers/copayRouter';
import usersatablesRouter from './routers/usersatablesRouter';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/copay', copayRouter);
app.use('/api/usersatables', usersatablesRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
import { Router } from 'express';

const usersatablesRouter = Router();

// Retrieve all users
usersatablesRouter.get('/users', (req, res) => {
    // Logic to retrieve user data
    res.send('Retrieve all users');
});

// Create a new user
usersatablesRouter.post('/users', (req, res) => {
    // Logic to create a new user
    res.send('Create a new user');
});

// Update an existing user
usersatablesRouter.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to update user information
    res.send(`Update user with ID: ${userId}`);
});

// Delete a user
usersatablesRouter.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to delete a user
    res.send(`Delete user with ID: ${userId}`);
});

export default usersatablesRouter;
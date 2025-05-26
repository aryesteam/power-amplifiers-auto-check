import express from 'express';
const router = express.Router();

// Example mock endpoint
router.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
    ]);
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.json({ message: `Logged in as ${username}` });
});
export default router

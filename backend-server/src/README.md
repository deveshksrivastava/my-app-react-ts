// Example route to create a new user
app.post('/users', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Define another route
app.post('/register', async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new User({ name, email });
        const savedUser = await newUser.save();
        res.json({ message: 'Data received successfully!', savedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
## BIG PROJECT RESAERCH
https://github.com/TheKinrar/instances/tree/7c9f686af31f4333c72280bf763ca4d883868847  JavaScript  star (241) fock(25)

````
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

```

```
RUN - node index.js

POST(ADD NEW)
POST and http://localhost:3000/employees/ , body, raw - this will get raja return with ID
{
    "name": "John",
    "position": "Software Developer",
    "office": "teqstories",
    "salary": 30000
}

OUTPUT
{
    "_id": "5f2b79e0d99dfe51c4543c07", //NEW VALUE CREATE
    "name": "John",
    "position": "Software Developer",
    "office": "teqstories",
    "salary": 30000,
    "__v": 0
}


PUT(UPDATE 1 VALUE) localhost:3000/employees/{id}
{
    "name": "John IS THE BOSS",  //CHANGE TO THIS
    "position": "Software Developer",
    "office": "teqstories",
    "salary": 30000
}

GET (SINGLE VALUE)
http://localhost:3000/employees/5f2c417afe8fb622f87ad35d

GET (ALL VALUE)
http://localhost:3000/employees/ & GET

DLETE (SINGLE VALUE)
http://localhost:3000/employees/5f2c417afe8fb622f87ad35d     DELETE

```
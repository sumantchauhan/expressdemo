const express = require('express');

const app = express();

const members = [
    {
        id:1,
        name:"John Doe",
        email:'john@gmail.com',
        status:'active'
    },
    {
        id:2,
        name:"Bob Williams",
        email:'bob@gmail.com',
        status:'inactive'
    },
    {
        id:3,
        name:"Shannon Jackson",
        email:'shannon@gmail.com',
        status:'active'
    }
]

app.get('/api/members', (req,res) => {
    res.json(members);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
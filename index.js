const express = require('express');
const app = express();
const port = 3001; 

app.use(express.json());

let departments = [
    { id: 1, name: ' IT' },
    { id: 2, name: 'DB' },
];
app.get('/', (req, res) => {
    res.send( "My. Dnan Namjun" );
});
app.get('/departments', (req, res) => {
    res.send(departments);
});
app.post('/departments', (req, res) => {
    let newDepartment = {
        id: departments.length + 1,
        name: req.body.name,
    };
    departments.push(newDepartment);
    res.send(departments);
});

app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});
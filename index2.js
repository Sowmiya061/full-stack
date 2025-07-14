
const express = require('express');
const app = express();
app.use(express.json());

let items = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' }
];

app.get('/items', (req, res) => {
    res.json(items); // Fixed from 'item' to 'items'
});

app.post('/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    item.name = req.body.name;
    res.json(item);
});

app.delete('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Item not found');
    const deleted = items.splice(index, 1);
    res.json(deleted[0]); // Return the deleted item (not an array)
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

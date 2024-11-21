const express = require('express');
const app = express();
const port = 3000;
const service = require('./service');

// Middleware to parse JSON bodies
app.use(express.json());

// Get endpoint for customers resource
app.get('/api/customers', (req, res) => {
    const customers = service.getCustomers();
    res.json(customers);
});

app.get('/api/contact_persons', (req, res) => {
    const contactPersons = service.getContactPersons();
    res.json(contactPersons);
});

app.get('/api/contact_info', (req, res) => {
    const contactInfo = service.getContactInfo();
    res.json(contactInfo);
});

// POST endpoint
app.post('/api/resource', (req, res) => {
    const data = req.body;
    try {
        service.addResource(data);
        res.status(201).send(`Resource added successfully`);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
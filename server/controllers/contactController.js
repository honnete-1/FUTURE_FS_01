const db = require('../config/db');

exports.submitContact = async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Please include all fields' });
    }

    try {
        await db.query('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)', [name, email, message]);
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error saving message' });
    }
};

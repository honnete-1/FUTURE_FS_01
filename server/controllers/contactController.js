const Message = require('../models/Message');

exports.submitContact = async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Please include all fields' });
    }

    try {
        const newMessage = new Message({
            name,
            email,
            message
        });

        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const mongoose = require('mongoose');
const password = encodeURIComponent("1q2w3e4r");
const dbURI = `mongodb+srv://ivanko:${password}@cluster0.ij4lho7.mongodb.net/?retryWrites=true&w=majority`;

async function start() {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the MongoDB database');
    } catch (e) {
        console.error('Error connecting to the database', e);
    }
}

module.exports = start;
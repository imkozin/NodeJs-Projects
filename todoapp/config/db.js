const mongoose = require('mongoose');

async function start() {
    try {
        await mongoose.connect('mongodb+srv://ivanko:<1q2w3e4r>@cluster0.rzfpwbi.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app
    }
}

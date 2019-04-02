const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    title: String,
    questions: [
        {
            qTExt: String,
            answers: [
                {
                    aTExt: String,
                    isTrue: Boolean
                }
            ]
        }
    ]
})

module.exports = mongoose.model('Quiz' , quizSchema); 
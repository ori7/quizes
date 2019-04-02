const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    title: String,
    questions: [
        {
            question: String,
            answers: [
                {
                    answer: String,
                    isTrue: Boolean
                }
            ]
        }
    ]
})

module.exports = mongoose.model('Quiz' , quizSchema); 
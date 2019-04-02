var app = require('express')(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    port = 3000,
    Quiz = require('./models/quiz.model');

var db = 'mongodb://127.0.0.1/north';
mongoose.connect(db, { useMongoClient: true });
var con = mongoose.connection;

con.on('error', console.error.bind(console, 'connection error:'));

con.once('open', function () {
    console.log("connection created");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/quiz', function (req, res) {
    Quiz.find({}).exec(function (error, result) {
        if (error) {
            res.send(404);
        }
        else
            res.send(result);
    })
})

app.post('/quiz', function (req, res) {
    var newQuiz = new Quiz();
    newQuiz.qTitle = 'PHP'; //req.body.name;
    newQuiz.questions = [];

    newQuiz.save(function (err, quiz) {
        if (err) {
            console.log(err);
            res.send('Error saving quiz!')
        } else {
            console.log(quiz);
            res.json(quiz);
        }
    })
})

/*
app.get('/test', function (req, res) {
    var newQuiz = new Quiz();
    newQuiz.title = 'javascript'; //req.body.name;
    newQuiz.questions = [
        {
            qTExt: "q1",
            answers: [
                {
                    aTExt: "answer1",
                    isTrue: false
                },
                {
                    aTExt: "answer2",
                    isTrue: false
                },
                {
                    aTExt: "answer3",
                    isTrue: true
                }
            ]
        }
    ]

    newQuiz.save(function (err, quiz) {
        if (err) {
            console.log(err);
            res.send('Error saving quiz!')
        } else {
            console.log(quiz);
            res.json(quiz);
        }
    })
})*/

app.listen(port, function () {
    console.log(`App listening on port ${port}`);
})

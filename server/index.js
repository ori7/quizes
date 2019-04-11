var app = require('express')(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors');
port = 3000,
    Quiz = require('./models/quiz.model');
jwt = require('jsonwebtoken');
jwtKey = 'sdfj&*dfgdlga#$df3#@$84bf45';

app.use(cors());

var db = 'mongodb://127.0.0.1/north';
mongoose.connect(db, { useMongoClient: true });
var con = mongoose.connection;

con.on('error', console.error.bind(console, 'connection error:'));

con.once('open', function () {
    console.log("connection created");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {

    if (req.path === '/login')
        next();

    else if (!req.headers.authorization) {
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    else {
        try {
            jwt.verify(req.headers.authorization.replace('Bearer ', ''), jwtKey);
            next();
        }
        catch (err) {
            return res.status(403).json({ error: 'Bad credentials' });
        }
    }
})

app.get('/quiz', function (req, res) {
    Quiz.find({}).exec(function (error, result) {
        if (error) {
            res.send(404);
        }
        else
            res.send(result);
    });
});

app.post('/quiz', function (req, res) {
    var newQuiz = new Quiz();
    newQuiz.title = 'PHP'; //req.body.name;
    newQuiz.questions = [];

    newQuiz.save(function (err, quiz) {
        if (err) {
            console.log(err);
            res.send('Error saving quiz!')
        } else {
            console.log(quiz);
            res.json(quiz);
        }
    });
});

app.post('/login', function (req, res) {

    console.log(req.body);
    if (req.body.username === 'user' && req.body.password === 'p') {
        const token = jwt.sign({ username: 'user' }, jwtKey);
        res.json(token);
    } else {
        res.status(401).json('no authorized');
    }
});

/*
app.get('/test', function (req, res) {
    var newQuiz = new Quiz();
    newQuiz.title = 'javascript'; //req.body.name;
    newQuiz.questions = [
        {
            question: "q1",
            answers: [
                {
                    answer: "answer1",
                    isTrue: false
                },
                {
                    answer: "answer2",
                    isTrue: false
                },
                {
                    answer: "answer3",
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
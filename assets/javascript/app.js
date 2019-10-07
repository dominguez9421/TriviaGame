
// with this the game will start 
$("#start").on('click', function () {
    game.start();
})

$(document).on('click', '#end', function () {
    game.done();
})
// Creating several questions for the user to interact with
var questions = [{
    question: "What was Ash first starter pokemon?",
    answers: ["Charmander", "Squirtle", "Bulbasur", "Pikachu"],
    correctAnswer: "Pikachu"
}, {
    question: "Who was Goku fighting when he first transform into ssj3?",
    answers: ["Cell", "Freeza", "Majin Buu", "MR. Satan"],
    correctAnswer: "Majin Buu"
}, {
    question: "Who is Sora's nobody?",
    answers: ["Axel", "Riku", "Xion", "Roxas"],
    correctAnswer: "Roxas"
}, {
    question: "What is the color of the shirt of rocko's modern life?",
    answers: ["Green with blue triangles", "Yellow with red triangles", "Blue with purple Triangles", "Green with yellow triangles"],
    correctAnswer: "Blue with purple Triangles"
}, {
    question: "How many stones does the infinity gaunlet can hold?",
    answers: ["4", "6", "7", "9"],
    correctAnswer: "6"
}, {
    question: "Who is mario bros evil villan?",
    answers: ["Bowsette", "Bowser", "Boo", "Bullet bill"],
    correctAnswer: "Bowser"
}, {
    question: "In Apex Legends who is the fastest character in the game?",
    answers: ["Mirage", "Gibralter", "Caustic", "Octane"],
    correctAnswer: "Octane"
}, {
    question: "It's a beautiful day outside. birds are singing, flowers are blooming... on days like these, kids like you...?",
    answers: [" should be running happy ouside", "should be playing outside", "should be eating cupcakes", "Should be burning in hell."],
    correctAnswer: "Should be burning in hell."
}];
// here we will create a variable where the user will be able to see how many answers they had correct or incorrect and also we can create the time counter so the user has a limited time to answer the questions.
var game = {
    correct: 0,
    incorrect: 0,
    counter: 50,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time's up");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">50</span>  Seconds</h2>');
        $('#start').remove();
        // these foor loops will allow the user to select on any of the answers using a radio button 
        for (var i = 0; i < questions.length; i++) {
            // this line we increase the font of the questions to a bigger size than the answers. 
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
        $('#subwrapper').append('<br><button id="end">DONE</button>');
    },

    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        this.result();

    },

    result: function () {
        clearInterval(timer);
        $('subwrapper h2').remove();

        $('#subwrapper').html("<h2>all done!</h2>");
        $('#subwrapper').append("<h3>Correct answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>incorrect answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3> Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
}




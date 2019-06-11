document.addEventListener("DOMContentLoaded", function (event) {
    //do work
    // var guessWord = ["trust", "mirror", "lawsuit", "darkness", "secret", "time", "coffin",];
    // var riddleWord1 = ["t", "r", "u", "s", "t"]
    // var riddles = [
    //     "What is it that no man wants to have but no man wants to lose?",
    //     "The more there is the less you see. What could I be?",
    //     "If you know me, you'll want to share me. But if you share me, I'll be gone. What am I?",
    //     "I never stop, I control your life but without me you wouldn't go anywhere. What am I?",
    //     "The man who invented it doesn't want it, the man who bought it doesn't need it, and the man who needs it doesn't know. What is it?"];


    var trust = {
        riddle: "You can have me but cannot hold me, gain me and quickly lose me, if treated with care I can be great, and if betrayed I will break. What am I?",
        riddleLetters: ["T", "R", "U", "S", "T"],
        riddleVal: "trust",
    };
    var mirror = {
        riddle: "Hit me hard and I will crack. But you'll never stop me from staring back. What am I?",
        riddleLetters: ["M", "I", "R", "R", "O", "R"],
        riddleVal: "mirror",
    };
    var lawsuit = {
        riddle: "What is it that no man wants to have but no man wants to lose?",
        riddleLetters: ["L", "A", "W", "S", "U", "I", "T"],
        riddleVal: "lawsuit"
    };
    var darkness = {
        riddle: "The more there is the less you see. What am I?",
        riddleLetters: ["D", "A", "R", "K", "N", "E", "S", "S"],
        riddleVal: "darkness"
    };
    var secret = {
        riddle: "If you know me, you'll want to share me. But if you share me, I'll be gone. What am I?",
        riddleLetters: ["S", "E", "C", "R", "E", "T"],
        riddleVal: "secret"
    };
    var time = {
        riddle: "I never stop, I control your life but without me you wouldn't go anywhere. What am I?",
        riddleLetters: ["T", "I", "M", "E"],
        riddleVal: "time"
    };
    var coffin = {
        riddle: "The man who invented it doesn't want it, the man who bought it doesn't need it, and the man who needs it doesn't know. What is it?",
        riddleLetters: ["C", "O", "F", "F", "I", "N"],
        riddleVal: "coffin"
    };

    var riddlerGame = [];
    riddlerGame.push(trust, mirror, lawsuit, darkness, secret, time, coffin);

    var currentWord = riddlerGame[Math.floor(Math.random() * riddlerGame.length)];
    var riddleSection = document.getElementById("riddle");
    riddleSection.append(currentWord.riddle);
    var answerSection = document.getElementById("answer");
    // answerSection.append(currentWord.riddleLetters);

    for (i = 0; i < currentWord.riddleLetters.length; i++) {
        var letter = document.createElement('span');
        letter.setAttribute('class', 'question-mark');
        letter.textContent = currentWord.riddleLetters[i];
        var rLetter = document.createElement('button');
        rLetter.append(letter);
        rLetter.setAttribute('class', 'btn btn-dark');
        rLetter.setAttribute('type', 'button');
        answerSection.append(rLetter);

        var input = document.getElementById('key');
        input.onclick = function() {
            if(input.textContent = rLetter.textContent) {
                rLetter.letter.classList.remove("question-mark");
            } else {
                alert("wrong!");
            }
        }
                

    }














});
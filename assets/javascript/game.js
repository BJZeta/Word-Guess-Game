document.addEventListener("DOMContentLoaded", function(event) { 
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
    riddleLetters: ["t", "r", "u", "s", "t"],
    riddleVal: "trust",
};
 var mirror = {
        riddle: "Hit me hard and I will crack. But you'll never stop me from staring back. What am I?",
        riddleLetters: ["m", "i", "r", "r", "o", "r"],
        riddleVal: "mirror",
    }
    
    var riddlerGame = [];
    riddlerGame.push(trust,mirror);

    document.getElementById("riddler").append(riddlerGame[0].riddle);

});
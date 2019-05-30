$(document).ready(function() {

// Start button event listener
$("#startbtn").click(function() {  
});

// Trivia global variables
var game = {
    correct: 0,
   wrong: 0, 
   score: 0
};

// Questions object, answers & answers array 
questions = [
    { q: "What band sings 'I Want it That Way'?",
    a: "Backstreet Boys",
    choices: "98 degrees, Boys II Men, New Kids on the Block",
    },
    {  q: "Summer Girls was sang by?",
    a: "LFO",
    choices: "B2K, BBMak, O-Town",
    }, 
    {  q: "Justin Timberlake was part of what boy band?",
    a: "N*SYNC",
    options: "98 degrees, O-Town, Solo! He was never in a band",
    },
    { q: "Who was not part of NKOTB?",
    a: "Paul",
    options: "Donnie, Jordan, Joey",
    },
    { q: "Which band is the top selling group?",
    a: "Backstreet Boys",
    options: "Jackson 5, Hanson, The Beatles",
},
];
// console.log(questions);

// 5 questions, 15 seconds for each question. Timer functions to display to HTML
var seconds = 15;
// var increment;
function Timer() {
    increment = setInterval(decrement, 1500);
 };

 function decrement() {
     seconds --;
     $("#time-left").html("Time left: " + seconds + "seconds");
     if (seconds === 0) {
        // //  timerStop();
        //  questions.length = 0;
//      }
//  };
//  };

// Create function to display questions to HTML with multiple choice answers
    // function displayQ() {
    //     for (var i = 0; i < questions.length; i++) {
            // $("#askqs").html()

    // };
    
// reset game, display end game results 
// function reset();







// Boy bands questions
// Q: What band sings 'I Want it That Way'?
 // A: Backstreet Boys 
 // Potential answers: 98 degrees, Boys II Men, New Kids on the Block 

 // Q: Summer Girls was sang by?
 // A: LFO
 // Potential answers: B2K, BBMak, O-Town 

 // Q: Justin Timberlake was part of what boy band? 
 // A: N*SYNC
 // Potential answers: 98 degrees, O-Town, Solo! He never was in a band 

 // Q: Who was not part of NKOTB? 
 // A: Paul
 // Potential answers: Donnie, Jordan, Joey

// Q: Which band is the top selling group? 
// A: Backstreet Boys 
// Potential answers: Jackson 5, Hanson, The Beatles

var readlineSync = require('readline-sync');
var name = readlineSync.question("Your name: ");
console.log("Hello "+name+"!!\nlet's see how much do you know Anshuman");
var score = 0;
var questions = [{
  question: "What's his birth place?\n",
  answer: "bikaner"
}, {
  question: "What's his current Age?\n",
  answer: "20"
}, {
  question: "What does he love to eat?\n",
  answer: "samosa"
}, {
  question: "Where is he living right now?\n",
  answer: "jodhpur"
}, {
  question: "Is he heavier than 60kgs?\n",
  answer: "yes"
}];

function play(question, answer){
  var res = readlineSync.question(question);
  if(res.toLowerCase() === answer.toLowerCase()){
    score = score+1;
    console.log("right!!");
  }
  else{
    console.log("wrong!!")
  }

  console.log("Current Score:", score)
  console.log("-----------------")
}

for(var i  = 0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer);
}

console.log("You know him " + score + '/5 !!\n')

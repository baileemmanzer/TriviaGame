//make the start button start the clock and show all the questions 
var time= 120;
var timer=false;
var correct=0;
var incorrect=0;
var unanswered=0;

$("#start").on('click', function(){
  timer = setInterval(count, 1000);
  //hide the start button
  $("#start").hide();
  $("#QUESTIONS").show();
});

function stop() {

  // DONE: Use clearInterval to stop the count here and set the clock to not be running.
  clearInterval(timer); 
}
function count() {

  // DONE: increment time by 1
  time--;
  // DONE: Use the variable we just created to show the converted time in the "display" div.
  $("#timeRemaining").text(time);
  if (time===0) {
    stop();
    finalScore();
  }
}
//if timer gets to 0, display final counts for correct, incorrect, and unanswered
function finalScore() {
  $("#QUESTIONS").hide();
  unanswered=10-(correct+incorrect);
  var correctDiv=$("<div>");
  var incorrectDiv=$("<div>");
  var unansweredDiv=$("<div>");
  $(correctDiv).text("Correct Answers: " + correct);
  $(incorrectDiv).text("Incorrect Answers: " + incorrect);
  $(unansweredDiv).text("Unanswered: " + unanswered);
  $(".jumbotron").append(correctDiv, incorrectDiv, unansweredDiv);
}

$("#SUBMIT").on("click", function(){
  stop();
  finalScore();
})

//make button click and give button values
//if answer is correct, add point
//if incorrect add points to incorrect 
//no more button clicks for you
$('.1').on('click', function(){
  var answers=($(this).text());
  if (answers==="1984") {
    correct++;
  }
  else {
    incorrect++;
  }
  $('.1').hide();
})
//Question 2
$('.2').on('click', function(){
  var answers=($(this).text());
  if (answers==="dungeons and dragons") {
    correct++;
  }
  else {
    incorrect++;
  }
  $('.2').hide();
})
//Question 3
$('.3').on('click', function(){
  var answers=($(this).text());
  if (answers==="montauk") {
    correct++;
  }
  else {
    incorrect++;
  }
  $('.3').hide();
})
//Question 4
$('.4').on('click', function(){
  var answers=($(this).text());
  if (answers==="jane") {
    correct++;
  }
  else {
    incorrect++;
  }
  $('.4').hide();
})
//Question 5
$('.5').on('click', function(){
  var answers=($(this).text());
  if (answers==="d'artagnan") {
    correct++;
  }
  else {
    incorrect++;
  }
  $('.5').hide();
})
//Question 6
$('.6').on('click', function(){
  var answers=($(this).text());
  if (answers==="4") {
    correct++;
  }
  else {
    incorrect++;
  }
  $('.6').hide();
})
//Question 7
$('.7').on('click', function(){
  var answers=($(this).text());
  if (answers==="the upside down") {
    correct++;
  }
  else {
    incorrect++;
  }
  $('.7').hide();
})
//Question 8
$('.8').on('click', function(){
  var answers=($(this).text());
  if (answers==="she died of cancer") {
    correct++;
  }
  else {
    incorrect++;
  }
  $('.8').hide();
})
//Question 9
$('.9').on('click', function(){
  var answers=($(this).text());
  if (answers==="he's a private investigator") {
    correct++;
  }
  else {
    incorrect++;
  }
  $('.9').hide();
})
//Question 10
$('.10').on('click', function(){
  var answers=($(this).text());
  if (answers==="should i stay or should i go") {
    correct++;
  }
  else {
    incorrect++;
  }
  $('.10').hide();
})
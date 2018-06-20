


var timer =21;
var intervaled;
var userGuesses;
var question = ["Q1:77 - 34 is?", "Q2:24 * 6 is?" ,"Q3: 33 + 65 is?","Q4: 72 / 9 is?","Q5: 65 * 2 -5 is?",
                  "Q6: 8 * 9 +54 is?","Q7: 875/35 is?","Q8: 44*5 is?"];

var answer = [["55","34","43","45"],["154","132","144","155"],["98","98","76","99"],["8","9","7","4"],
            ["123","145","125","122"],["164","143","126","136"],["20","44","35","25"],
            ["220","440","320","328"]]
// the order of the right answer the 
var correctAnswer= ["34","144","98","8","125","126","25","220"]
 var questionCounter = 0; 
 var wincounter = 0;
 var losecounter = 0;  
 var unanswer = 0;





//----------------------------------------
function time(){

   intervaled = setInterval(time2,1000); 

 function time2(){

if(timer> 0){
timer--; 
  }

if(timer===0){
timeUp();
clearInterval(intervaled);
    }
$("#time").text("Time Remaining: "+ timer+" Seconds");
 }
}
//-----------------------------------------
$("#start").on("click",function(){

  $("#start").empty();
 time();
 questions();
 

 });

//-------------------------------------------
function questions(){
    $("#question").text(question[questionCounter]);
    $("#answer1").text(answer[questionCounter][0]);
    $("#answer2").text(answer[questionCounter][1]);
    $("#answer3").text(answer[questionCounter][2]);
    $("#answer4").text(answer[questionCounter][3]);
   
}
//---------------------------------------------
function timeUp(){

    $(".answer,#questions,#answer1, #answer2, #answer3, #answer4").empty();
$("#question").append("<h2>Out of Time</h2><br>  <h4>The Correct Answer is:</h4>" + correctAnswer[questionCounter]);
setTimeout(order,1000);
unanswer++;
}
//-----------------------------------------------
$(".answer").on("click",function(){
   userGuesses = $(this).text();
   if (userGuesses===correctAnswer[questionCounter]){
       win();
       wincounter++;
       clearInterval(intervaled);
       setTimeout(order,1000);
    //    alert("win");
   }else{
       lose();
       losecounter++;
       clearInterval(intervaled);
       setTimeout(order,1000);
    //    alert("lose");
   }
});
//----------------------------------------------------
function win(){
   
    $(".answer,#question,#answer1, #answer2, #answer3, #answer4").empty();
    $("#question").append("Correct");
    $("#answer1").append("<img src='assets/images/correct.png'alt='X-image'>")
   
}
//---------------------------------------------
function lose(){
    
    $(".answer ,#question,#answer1, #answer2, #answer3, #answer4").empty();
    $("#question").append("Wrong answer the right answer is: " +correctAnswer[questionCounter]);
    $("#answer1").append("<img src='assets/images/wrong.png'width=200px alt='correct-image'>")
   
}
//--------------------------------------------
function order(){
    if (questionCounter < 7){
        questionCounter++;
        questions();
        timer =21;
        time();
    }else if(questionCounter=7){
        finalScreen();
    }
}
//--------------------------------------------
function finalScreen(){
    $(".answer, #question,#answer1, #answer2, #answer3, #answer4").empty(); 
    $("#all-done").text("All Done,here is how you did:");
    $("#correct").text("Correct Answer: "+wincounter);
    $("#incorrect").text("Incorrect Answer: " + losecounter);
    $("#unanswer").text("Unanswered: " + unanswer);
    $("#start-over").text("Start Over?");
}
//------------------------------------------------
$("#start-over").on("click",function(){
    questionCounter =0;
    time();
    questions();
    wincounter =0;
    losecounter =0;
    unanswer =0;
   
    $("#all-done ,#correct,#incorrect,#unanswer,#start-over").empty();

});
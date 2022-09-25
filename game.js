
var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var userClickedPattern = [];
var started = false; var level=0;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


function playSound(name)
{
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*3)+1;
    var chosenRandomColor = buttonColors[nextSequence()];
    gamePattern.push(chosenRandomColor);
    
    $("#"+chosenRandomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel)
{
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {
        console.log("success");
        if(userClickedPattern.length === ganePattern.length)
        {
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeOut(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver()
{
    started = false;
    level = 0;
    gamePattern = [];
}





var gameSequence = [];
var level = 0;
var colours = ["green", "red", "yellow", "blue"];
var keypressColour;
var key_pressed = false;
var i = 0;

$(document).keypress((event) => {
  if(key_pressed == false)
  {
    keypressColour = random_color();
    playSound(keypressColour);
    blink_colour(keypressColour);
    key_pressed = true;
  }
});

$(".box").click(function(){
  console.log(gameSequence);
    if(key_pressed == true && gameSequence.length==1)
    {
      if(this.id==gameSequence[0])
      {
        blink_colour(this.id);
        playSound(this.id);
        setTimeout(function(){
          var nextClick = random_color();
          blink_colour(nextClick);
          playSound(nextClick);
        },1000);
      }
    }
    else if (key_pressed == true && gameSequence.length-1 >i && gameSequence.length!=1)
    {
      if(gameSequence[i]==this.id)
      {
        blink_colour(this.id);
        playSound(this.id);
        i++;
      }
      else{
        playAgain();
      }
    }
    else
    {
      i=0;
      blink_colour(this.id);
      playSound(this.id);
      setTimeout(function(){
        var nextClick = random_color();
        blink_colour(nextClick);
        playSound(nextClick);
      },1000);

    }
});



function blink_colour(colour_name){
if(colour_name=="green")
{
  $("#green").addClass("clicked_green");
  setTimeout(function(){
    $("#green").removeClass("clicked_green");
  },300);
}
if (colour_name=="red")
{
  $("#red").addClass("clicked_red");
  setTimeout(function(){
    $("#red").removeClass("clicked_red");
  },300);
}
if (colour_name=="yellow")
{
  $("#yellow").addClass("clicked_yellow");
  setTimeout(function(){
    $("#yellow").removeClass("clicked_yellow");
  },300);
}
if (colour_name=="blue")
{
  $("#blue").addClass("clicked_blue");
  setTimeout(function(){
    $("#blue").removeClass("clicked_blue");
  },300);
}
}

function playSound(name)
{
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}

function random_color()
{
  var randomNumber = Math.floor(Math.random()*4);
  var randomColour = colours[randomNumber];
  gameSequence.push(randomColour);
  level++;
  $("h1").text("Level - " + level);
  return randomColour;
}


function playAgain(){
  gameSequence = [];
  key_pressed = false;
  level = 0;
  playSound("wrong");

  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  $("h1").text("Game Over, Press Any Key to Restart");
}

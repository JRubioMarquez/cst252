


// Create a <button> element (in jQuery, NOT In your HTML).
// Give it a text label
// Add it to your output div
$("#output").append("<button id=button>Click Here")
// Add a click event to it that will bring up an alert
$("#button").click(function(){
  alert("You have clicked the button!");
})
// Restyle the button with jQuery so it is a pleasant green.
$("button").css("background-color", "#96ffb2")

//taskx:Bonus
("#output").append("<button id=color-button>Change Colors")

$("#color-button").click(function(){
  if(clicked){
    $("#c-button").css("background-color", "#85fff5")
  }
  else {
    $("#c-button").css("background-color", "#96ffb2")
  }
})

("#output").append("<button id=c-button>Change Colors")

$("#c-button").click(function(){

})

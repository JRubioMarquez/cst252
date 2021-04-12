



// Add a click event to each button
// In the event code, toggle a new class within the div
// Go into your css and style each of the classes
// Test each button

//purpose button (color orange)
$("#purpose-button").click(function(){
  console.log($("#purpose-button"));
  $("#purpose-button").toggleClass("star"); //(turn blue)
})

//challenge button (color blue)
$("#challenge-button").click(function(){
  console.log($("#challenge-button"));
  $("#challenge-button").toggleClass("sun"); //(turn yellow)
})

// result button (color yellow)
$("#result-button").click(function(){
  console.log($("#result-button"));
  $("#result-button").toggleClass("moon"); //(turn orange)
})

/******************************************************************************/
//credit https://stackoverflow.com/questions/14200833/jquery-toggling-between-3-classes-initially
// credit http://jsfiddle.net/FSFpZ/
//Make a button that will cycle between several different classes, including invisible.

//selects an element by id "output-button"
$("#output-button").click(function(){
  //within the id "output-button" selects div
  $('div').each(function(){
    // creates an array called classes
    var outputs = ['output1','output2','output3'];
    //adding method on a prototype called classes,
    this.className = outputs[($.inArray(this.className, outputs)+1)%outputs.length];
  });
});

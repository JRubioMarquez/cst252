/*
 * Author: Joanna Rubio
 * Created: Feb 15
 * Public Domain
 */

// Define Variables

var myTransport = ["Jeep Grand Cherokee", "rides from friends", "bus"];

var myMainRide = {
  make: "Jeep",
  model: "Grand Cherokee",
  color: "Gray",
  year: 2008,
  age: function() {
    return 2021 - age;
  }
}

//Output

document.writeln("Kinds of transportation I use: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre");

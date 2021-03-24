/**
 * Author: Joanna Rubio
 * Created: 03/07/2020
 *
 *
 **/

function Vehicle (make, model, year, color, extras, name) {
   this.make = make;
   this.model = model;
   this.year = year;
   this.color = color;
   this.extras = extras;
   this.name = name;
   this.info = function() {
      return this.color + " " + this.year + " " + this.make + " " + this.model + "with " + this.extras + " called " + this.name;
   }
}

var vehicles = [];

vehicles.push(new Vehicle("Jeep", "Chereeoke", 2008, "gray", "tinted windows", "bob"));

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
   var newEl = document.createElement("li");
   newEl.innerText = vehicles[i].info();
   outputEl.appendChild(newEl);
}

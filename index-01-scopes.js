// Example 1
// A scoping issue scope leakage
/*
var people = ["Nelson", "Foo", "Bar", "Baz"];
var list = document.getElementById("people-list");

for (var i = 0; i < people.length; i++) {
  var person = people[i];
  var element = document.createElement("li");
  element.innerText = person;

  element.addEventListener("click", function () {
    alert("You clicked on " + person + ", at Index " + i);
  });
  
  list.appendChild(element);

} */

//------------------------
// Example 2

/*
var a = 42;
var b = 57;

function example2() {
  var a = b = 10;
}

console.log("A = " + a, "B = " + b);
console.log("---------");
example2();
console.log("A = " + a, "B = " + b);

function example2_clear() {
  var a = 10;
  b = 10;
}

console.log("A = " + a, "B = " + b);
*/


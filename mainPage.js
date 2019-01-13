//Create button
var button = document.createElement("button");
button.innerHTML = "Do Something";

//Append Somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

//Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});

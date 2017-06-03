console.log('hi');

var jsonHTML = 'https://alecsands.github.io/Flashcards/jsconcepts.json';
var myRequest = new XMLHttpRequest();

myRequest.open('GET', jsonHTML);
myRequest.responsetype = 'json';
myRequest.send();
myRequest.onload = function() {
  var programmingConcepts = {};
  programmingConcepts = myRequest.response;
  console.log(programmingConcepts);
  console.log(programmingConcepts[0]);
  //populateHeaderConcept(programmingConcepts);
  return programmingConcepts;
};

console.log(programmingConcepts);

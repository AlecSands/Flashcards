console.log('hi');

var jsonHTML = 'jsconcepts.json';
var myRequest = new XMLHttpRequest();

myRequest.open('GET', jsonHTML);
myRequest.responsetype = 'json';
myRequest.send();
myRequest.onload = function() {
  var programmingConcepts = myRequest.response;
  console.log(programmingConcepts);
  //populateHeaderConcept(programmingConcepts);
  return programmingConcepts;
};

console.log(programmingConcepts);

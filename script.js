



var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0; i<names.lenght; i++) {

  var name=[names[i]];  
  var firstLetter = names.charAt(0);


  if (firstLetter=="j"||firstLetter=="J") {
    console.log("GoodBye"+names[i]);
  } 
  else {
    console.log("Hello"+names[i]);
  }
}

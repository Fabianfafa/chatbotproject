
   function askQuestion(){
  var question = document.getElementById("input").value;
  var giveresponse = responses[question]
document.getElementById("chat-area").innerHTML += giveresponse +  " " + "<br>";
}
var responses = {
  "yes" : "no",
  "Whats yu name ?" : "young child",
  "How old are you?" : "very old",
  "what time is it?" :  "no",
  "haha" : "hahahahahahaha",
  "How are you?" : "Well",
}

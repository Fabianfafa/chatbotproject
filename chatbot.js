var now = new Date(Date.now());

var fallback = ["dont understand", "come agian?"];
   function askQuestion(){
  var question = document.getElementById("input").value;
  question = question.toLowerCase()
  var giveresponse = responses[question]
  if (giveresponse == undefined){
    var rand = Math.floor((Math.random()* fallback.length));
    document.getElementById("chat-area").innerHTML +=  fallback[rand] +  " " + "<br>";
  } else {document.getElementById("chat-area").innerHTML += giveresponse +  " " + "<br>";
}
}

$(document).keydown(function(e) {
 if (e.keyCode == 13) {
   askQuestion();
 }
});

var responses = {
  "yes" : "no",
  "whats yu name ?" : "young child",
  "how old are you?" : "very old",
  "what time is it?" :  now,
  "haha" : "hahahahahahaha",
  "how are you?" : "Well"
}

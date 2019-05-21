

(function (){var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var x = 0; x<names.length; x++){
        if ((names[x].charAt(0)=== "J") || (names[x].charAt(0)=== "j")){
            byeSpeaker.speak(names[x]);
        }else{
            helloSpeaker.speak(names[x]);
        }
}
})();
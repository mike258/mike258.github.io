
(function (window){
    var byeSpeaker ={};
    byeSpeaker.phrase = "Good Bye";


    byeSpeaker.speak = function (name) {
        console.log(byeSpeaker.phrase+ " " + name);
    }
    window.byeSpeaker = byeSpeaker;
})(window)


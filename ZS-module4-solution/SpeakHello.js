(function (window) {  // STEP 2

  var helloSpeaker = {}; // STEP 3
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) { // STEP 4
    console.log(speakWord + " " + name);
  }

    window.helloSpeaker = helloSpeaker;
})(window);  // STEP 5
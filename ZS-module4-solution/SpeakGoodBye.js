(function (window) {  // STEP 6

  var byeSpeaker = {};  // STEP 7
  var speakWord = "Good Bye";


  byeSpeaker.speak = function (name) {  // STEP 8
    console.log(speakWord + " " + name);
  }

    window.byeSpeaker = byeSpeaker;
})(window);  // STEP 9
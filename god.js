stages = [];
currentStage = 1;

function Stage(ID, question, yesID, noID) {
  this.question = question;
  this.yesID = yesID;
  this.noID = noID;
  stages[ID] = this;
}

new Stage(1, "Does God Exist?", 10, 10)

// Ontological Argument
new Stage(10, "Is a conceived idea better than a real one?", 13, 11);
new Stage(11, "Wouldn't you rather have a real donut than one in your mind?", 10, 12);
new Stage(12, "Wow, loser.", 11, 11);
new Stage(13, "Assuming God is perfect in our minds, wouldn't He be more perfect if He were real?", 14, 11);
new Stage(14, "So God exists right?", 15, 20);
new Stage(15, "But wouldn't you rather get eaten by a shark in your mind than in real life?", 16, 17);
new Stage(16, "So a conceived idea isn't always better than a theoretical one?", 17, 15)
new Stage(17, "So we haven't proved that God exists", 20, 15)

// Cosmological Argument
new Stage(20, "Did the Universe have a beginning?", 24, 21)
new Stage(21, "Isn't the Universe expanding?", 23, 22)
new Stage(22, "It is, there's proof", 23, 23)
new Stage(23, "So there is a beginning", 24, 21)
new Stage(24, "Did something need to cause this beginning?", 27, 25)
new Stage(25, "Something can come from nothing?", 26, 24)
new Stage(26, '<img src="https://media.giphy.com/media/6Q2KA5ly49368/giphy.gif" />', 25, 25)
new Stage(27, "Was this thing a higher power?", 28, 32)
new Stage(28, "So God exists?", 29, 35)
new Stage(29, "Does the cause of the Universe merit worship?", 30, 31)
new Stage(30, "It doesn't, really", 31, 31)
new Stage(31, "So we haven't proved that 'God' is real?", 35, 28)
new Stage(32, "What else could've caused the start of the Universe?", 27, 27)

new Stage(35, "Start of Pascal's Wager", 1, 1)



function setup() {
  $('#q').html(stages[currentStage].question)
}

$('#yes').click(function() {
  currentStage = stages[currentStage].yesID
  setup()
})

$('#no').click(function() {
  currentStage = stages[currentStage].noID
  setup()
})
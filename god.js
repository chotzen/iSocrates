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
new Stage(17, "So we haven't proved that God exists? &#x1F914;", 20, 15)

// Cosmological Argument
new Stage(20, "Did the Universe have a beginning?", 24, 21)
new Stage(21, "Isn't the Universe expanding?", 23, 22)
new Stage(22, "It is, there's proof", 23, 23)
new Stage(23, "So there is a beginning", 24, 21)
new Stage(24, "Did something need to cause the beginning of the universe?", 27, 25)
new Stage(25, "Something can come from nothing?", 26, 24)
new Stage(26, '<img src="https://media.giphy.com/media/6Q2KA5ly49368/giphy.gif" />', 25, 25)
new Stage(27, "Was this thing a higher power?", 28, 32)
new Stage(28, "So God exists?", 29, 35)
new Stage(29, "Does the cause of the universe merit worship?", 30, 31)
new Stage(30, "It doesn't, really", 31, 31)
new Stage(31, "So we haven't proved that 'God' is real? &#x1F914;", 35, 28)
new Stage(32, "What else could've caused the start of the Universe?", 27, 27)

// Pascal's Wager
new Stage(35, "Is it worth it to believe in God, just for the sake of going to heaven if He exists?", 38, 36)
new Stage(36, "Are you okay with eternal damnation if you don't believe?", 37, 35)
new Stage(37, "Hell it is :)", 42, 42)
new Stage(38, "Would God approve of you faking your belief in Him to go to heaven?", 37, 39)
new Stage(39, "So you need to have a true belief in God?", 40, 37)
new Stage(40, "Are you willing to have a true belief in God?", 41, 37)
new Stage(41, "Heaven it is!", 42, 42)

new Stage(42, "But we still don't know whether or not God exists... &#x1F914;", 50, 50)

// Evolution
new Stage(50, "Was the world created by an intelligent being?", 53, 51)
new Stage(51, "Is it possible for the immense complexity of the world to happen without some guiding force?", 52, 50)
new Stage(52, "Is it possible for a watch to be made with no watchmaker?", 57, 51)
new Stage(53, "Is the design intelligent if it has imperfections?", 57, 54)
new Stage(54, "Can a perfect being (i.e. God) create something imperfect?", 56, 55)
new Stage(55, "Exactly, so he didn’t.", 57, 57)
new Stage(56, "No he can’t", 57, 57)
new Stage(57, "So we still don't know whether or not God exists.... &#x1F914;", 10, 10)





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


$('#o').click(function() {
  currentStage = 10;
  setup()
})

$("#c").click(function() {
  currentStage = 20
  setup()
})

$("#p").click(function() {
  currentStage = 35
  setup()
})

$("#s").click(function() {
  currentStage = 50
  setup()
})




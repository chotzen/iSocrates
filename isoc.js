
var qs = {
  desc_0: { // 0 
      q: "Is it possible that your senses deceive you?",
      a: [{a: "Probably", t: 'desc_2'}, {a: "Nope", t: 'desc_1'}] 
    },
  desc_1: { // 1
      q: "What about optical illusions? Your brain can play tricks on you.",
      a: [{a: "This happens to a lot of people.", t: 'desc_0'}] 
    },
  desc_2: { // 2
      q: "Have you ever believed a dream was real?",
      a: [{a: "Yes", t: 'desc_4'}, {a: "No", t: 'desc_3'}]
    },
  desc_3: 
    { // 3
      q: "You're a dork who's trying to be difficult.",
      a: [{a: "This is something that happens to a lot of people", t: 'desc_2'}]
    },
  desc_4:
    { // 4
      q: "Could there be a deity tricking you into believing falsehoods?",
      a: [{a: "Yes", t: 'desc_6'}, {a: "Probably not", t: 'desc_5'}]
    },
  desc_5:
    { // 5
      q: "You are being deceived by the evil deceiver! The deity has tricked you into thinking that you aren't being deceived!",
      a: [{a: "Oh no!", t: 'desc_4'}]
    },
  desc_6:
    { // 5
      q: "So, you don't actually know if the world around us is real.",
      a: [{a: "Yes, my senses can deceive me!", t: 'desc_7'}]
    },
  desc_62:
    { // 5
      q: "How can you even be sure that you exist???",
      a: [{a: "I can't, tbh", t: 'desc_7'}]
    },
  desc_7:
    { // 5
      q: "Never fear! You're thinking about being deceived, so some part of your consicousness has to exist!",
      a: [{a: "Thanks, Descartes!", t: 'hume_1'}]
    },
  hume_1:
    {
      q: "Let's explore some of our sensory shortcomings a little closer. Can we know if events have a causes and effects?",
      a: [{a: "Sure!", t: 'hume_1'}, {a: "I don't believe that!.", t: 'hume_2'}]
    },
  hume_2:
    {
      q: "So roosters tend to call in the morning, does this mean that the sun rises because they make their morning call?",
      a: [{a: "Yes!", t: 'hume_3'}, {a: "No, that's crazy!", t: 'hume_4'}]
    },
  hume_3:
    {
      q: "How do you know?",
      a: [{a: "I don't, actually.", t: 'hume_2'}]
    },
  hume_4:
    {
      q: "So, can we ever be truly certain of cause and effect relationships?",
      a: [{a: "Yes.", t: 'hume_2'}, {a: "No!", t: 'hume_5'}]
    },
  hume_5:
    {
      q: "That's right, according to David Hume, we can't ever be sure of cause and effect relationships! \
          The only thing we can be sure of is that the both the cause and the effect take place, because that's what we see.",
      a: [{a: "Sounds good!", t: 'hume_6'}]
    },
  hume_6:
    {
      q: "This opens up a bigger question, about how we know anything. How do you know anything?",
      a: [{a: "I rely on my senses and experiences to know everything!", t: 'leib_0'}, 
          {a: "No! My mind is the source of all knowledge!", t: 'locke_1'}]
    },
  locke_1: 
    {
      q: "You consider yourself a rationalist, someone that believes that innate knowledge is more important.",
      a: [{a: "Let's consider the alternative.", t: 'locke_2'}]
    },
  locke_2: 
    {
      q: "Think about geometry. It doesn't require any evidence from outside to prove.",
      a: [{a: "Ok", t: 'locke_3'}]
    },
  locke_3: 
    {
      q: "However, would a person stranded on a desert island independently come up with Geometry?",
      a: [{a: "Probably not", t: 'locke_5'}, {a: "Yeah!", t: 'locke_4'}]
    },
  locke_4: 
    {
      q: "This is highly unlikely, as shown by the lack of geometry proved by people on desert islands.",
      a: [{a: "Okay...", t: 'locke_3'}]
    },
  locke_5: 
    {
      q: "Thus, ideas can't really be innate... or can they?",
      a: [{a: "I kan't wait to compromise!", t: 'kant_1'}]
    },
  leib_0:
    {
      q: "You consider yourself an empiricist, someone who relies on sensory experiences to gain knowledge.",
      a: [{a: "Let's consider the alternative.", t: 'leib_3'}]
    },
  leib_1:
    {
      q: "Do proofs from math class depend on real life examples?",
      a: [{a: "No, they don't.", t: 'leib_3'}, {a: "Yes, they do!", t: 'leib_2'}]
    },
  leib_2:
    {
      q: "You haven't paid enough attention in math class, evidently.",
      a: [{a: "I'm dumb.", t: 'leib_1'}]
    },
  leib_3:
    {
      q: "So, knowledge can be acquired without any experience!",
      a: [{a: "I'm convinced.", t: 'leib_5'}, {a: "I'm still not convinced.", t: 'leib_4'}]
    },
  leib_4:
    {
      q: "Think back to your proof from math class. You didn't use any evidence from the outside world in it– and you acquired knowledge.",
      a: [{a: "Okay, reason can also bring knowledge.", t: 'leib_5'}]
    },
  leib_5:
    {
      q: "This still doesn't explain the human experience well enough.",
      a: [{a: "I kan't wait to compromise!", t: 'kant_1'}]
    },
  kant_1:
    {
      q: "Think of a wall that has been painted green. If you observe that it is now blue, how do you reconcile the difference?",
      a: [{a: "Purely observation is enough to make sense of it.", t: 'kant_2'},
          {a: "Your brain needs to use logic and observation to make sense of it.", t: 'kant_3'}]
    },
  kant_2:
    {
      q: "Okay, you see a green wall and think nothing of it. You are okay with walls magically changing color.",
      a: [{a: "I want to know why!", t: 'kant_1'}]
    },
  kant_3:
    {
      q: "That's right! This is the central idea of Kant's thinking: Our minds are there to organize and process observation. \
        Both our minds and our senses are used in learning about the world.",
      a: [{a: "Give me one more example", t: 'kant_4'}]
    },
  kant_3:
    {
      q: "Take the scientific method. Central to the idea of science is observation, but the scientific method has produced\
          a breathtaking body of knowledge because the observation is done in a logical manner to ensure that the truth can be found.",
      a: [{a: "Awesome! I'm happy now! Let's go again!", t: 'desc_0'}]
    },  



}

function Graph() {
  this.questions = [];
  this.edges = [];
  this.numberOfEdges = 0;

  this.addQuestion = function (v) {
    this.questions.push(v);
    this.edges[v] = [];
  }

  this.addAnswer = function (question, answer, target) {
    this.edges[question][answer] = target
  }
}

var g = new Graph();


var question = "Is it possible that your senses deceive you?"

function start() {
  for (qi in qs) {
    g.addQuestion(qs[qi].q)
  }
  for (qi in qs) {
    console.log(qs[qi])
    for (var k = 0; k < qs[qi].a.length; k++) {
      g.addAnswer(qs[qi].q, qs[qi].a[k].a, qs[qi].a[k].t)
      console.log(qs[qi].q + " " +  qs[qi].a[k].a + " " + qs[qi].a[k].t)
    }
  }

  setup();
}
start();



var t

function setup() {
  $("#q").html(question);
  clearButtons();
  addButtons();

  $('.btn').click(function(e) {
    t = e.target
    question = qs[e.target.id].q
    setup();
  })
}

function addButtons() {
  for (edge in g.edges[question]) {
    $("#btns").append('<btn class="btn btn-primary btn-lg" id="'+ g.edges[question][edge] + '">' + edge + '</btn>')
  } 
}

function clearButtons() {
  $("#btns").html("");
}


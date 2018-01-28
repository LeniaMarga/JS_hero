var assert = require("assert");
var Hero = require("../Hero.js");
var Task = require("../Task.js");
var Food = require("../Food.js");


describe("Hero tests", function() {

  var Hero;
  var Task;
  var Food;

  beforeEach("Setup", function(){
    hero = new Hero("Lenia", 30, "lazania");
    eatLazania = new Task(20, 30, 40);
    enjoyLife = new Task(50, 30, 50);
    learnJS = new Task(40, 40, 35);
    lazania = new Food("lazania", 20);
    apple = new Food("apple", 25);
    iceCream = new Food("ice cream", 15);
  });

  it("Can talk", function(){
     assert.equal("My name is Lenia", hero.canTalk());
  });


  it("Should be able to add a task", function() {
    hero.addTask(enjoyLife);
    hero.addTask(eatLazania);
    assert.equal(2, hero.tasks.length);
  });

  it("Should be able to list the tasks", function() {
    hero.addTask(eatLazania);
    hero.hasTask(eatLazania);
    assert.equal("Difficulty: 20, Urgency 30, Reward 50", hero.hasTask());
  });



})

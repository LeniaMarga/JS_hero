function Hero(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
  this.completed = [];
}

Hero.prototype.canTalk = function(){
  return "My name is " + this.name ;
}

Hero.prototype.addTask = function(task) {
  this.tasks.push(task);
}

Hero.prototype.listTasks = function() {
  var tasksList = this.tasks.map(function(task) {
    return task.prettyPrint();
  })
  return tasksList[0];
}

Hero.prototype.doTask= function(taskToDo) {
  var taskIndex = this.tasks.indexOf(taskToDo);
  this.tasks.splice(taskIndex, 1);

  this.completed.push(taskToDo);
}


// Hero.prototype.completesATask = function () {
//     var completed = [];
//
//     return function(task){
//       completed.push(task);
//     }
// }


Hero.prototype.eatsFood = function(food){
  if(food == this.fav_food){
    this.health += 1.5 *food.value;
  }else{
    this.health += food.value;
  }
  return this.health;
}


Hero.prototype.sortTasksByDifficulty = function(){
   this.tasks.sort(function(task1, task2){
       return task1.difficulty - task2.difficulty;
   })
}

Hero.prototype.sortTasksByUrgency = function(){
   this.tasks.sort(function(task1, task2){
       return task1.urgency - task2.urgency;
   })
}




module.exports = Hero;


// function dynamicSortMultiple() {
//     /*
//      * save the arguments object as it will be overwritten
//      * note that arguments object is an array-like object
//      * consisting of the names of the properties to sort by
//      */
//     var props = this.tasks;
//     return function (difficulty, urgency) {
//         var i = 0, result = 0, numberOfProperties = props.length;
//         /* try getting a different result from 0 (equal)
//          * as long as we have extra properties to compare
//          */
//         while(result === 0 && i < numberOfProperties) {
//             result = dynamicSort(props[i])(difficulty, urgency;
//             i++;
//         }
//         return result;
//     }
// }




///need to be encapsulated in complete a task
//or use invoke?
// Hero.prototype.seeCompleted = function(){
//    this.tasks.forEach(function(task){
//
//
//    })
// }
//    - A hero should be able to eat food, and health should go up by the replenishment value
// - If the food is their favourite food, their health should go up by 1.5 * value.
// - A hero should be able to sort their tasks by difficulty, urgency or reward.
// - A hero should be able to view tasks that are marked as completed or incomplete.
//
// ## Extension
// - Create a constructor to create Rat objects.
// - Rats should be able to touch food,  if they do the food becomes poisonous.
// - Heroes that eat poisonous food should lose health.

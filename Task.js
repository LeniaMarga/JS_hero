function Task(difficulty, urgency, reward) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
}

Task.prototype.prettyPrint = function() {
  return "Difficulty: " + this.difficulty + ", Urgency: " + this.urgency + ", Reward: " + this.reward
}

module.exports = Task;

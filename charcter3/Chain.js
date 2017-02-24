function ClassManager() {
}
ClassManager.prototype.addClass = function (str) {
  console.log('Class:' + str + 'added');
  return this;
};


var manager = new ClassManager();
manager.addClass('classA').addClass('classB')
    .addClass('classC');

var $ = require("jquery");

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)){
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var strTodos = localStorage.getItem("todos");
    var todos = []
    try {
      todos = JSON.parse(strTodos)
    } catch (e) {
      console.log("JSON.parse failed for localStorage:todos", strTodos, e)
    }
    return $.isArray(todos) ? todos : [];
  }
};

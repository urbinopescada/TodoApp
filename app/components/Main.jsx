var React = require("react");
var Search = require("Search");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");

var Main = (props) => {
    return (
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <h1>Todo App</h1>
            <Search/>
            <TodoList/>
            <AddTodo/>
          </div>
        </div>
      </div>
    );
};

module.exports = Main;

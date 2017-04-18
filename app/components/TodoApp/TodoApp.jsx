var React = require("react");
var Search = require("Search");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");

module.exports = React.createClass({
  getInitialState: function (){
      return {
        todos: [
          {id:1, text:'walk the dog'},
          {id:2, text:'clean the garage'},
          {id:3, text:'Wash the car'},
          {id:4, text:'Prep my speach'}
        ]
      };
  },
  handleNewTodo: function (text) {
    var {todos} = this.state;
    todos.push(
      {id: ++todos.length, text: text}
    );
    this.setState({todos: todos});
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <h1>Todo App</h1>
            <Search/>
            <TodoList todos={todos}/>
            <AddTodo onNewTodo={this.handleNewTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

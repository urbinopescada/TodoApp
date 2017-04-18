var React = require("react");
var Search = require("Search");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");

module.exports = React.createClass({
  getInitialState: function (){
      return {
        showCompleted: false,
        searchText: "",
        todos: [
          {id:1, completed:false, text:'walk the dog'},
          {id:2, completed:false, text:'clean the garage'},
          {id:3, completed:true,  text:'Wash the car'},
          {id:4, completed:false, text:'Prep my speach'}
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

  handleSearch: function (showCompleted,searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText,
    });
  },
  handleCompletedTodo: function (id, isCompleted) {
      var {todos} = this.state;
      var item = todos.find( todo => todo.id === id );
      if(item){
          item.completed = isCompleted;
          this.setState({todos: todos});
      }
  },
  render: function() {
    var {todos,showCompleted,searchText} = this.state;
    return (
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <h1>Todo App</h1>
            <Search onSearch={this.handleSearch}/>
            <TodoList todos={todos} showCompleted={showCompleted} searchText={searchText} onCompletedTodo={this.handleCompletedTodo} />
            <AddTodo onNewTodo={this.handleNewTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

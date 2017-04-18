var React = require("react");
var uuid = require("node-uuid");

var Search = require("Search");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");

module.exports = React.createClass({
  getInitialState: function (){
      return {
        showCompleted: false,
        searchText: "",
        todos: [
          {id: uuid(), completed:false, text:'walk the dog'},
          {id: uuid(), completed:false, text:'clean the garage'},
          {id: uuid(), completed:true,  text:'Wash the car'},
          {id: uuid(), completed:false, text:'Prep my speach'}
        ]
      };
  },
  handleNewTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          completed:false,
          text: text
        }
      ]
    });
  },

  handleSearch: function (showCompleted,searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText,
    });
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id===id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
    //my solution that works
    /*
      var {todos} = this.state;
      var item = todos.find( todo => todo.id === id );
      if(item){
          item.completed = isCompleted;
          this.setState({todos: todos});
      }
      */

  },
  render: function() {
    var {todos,showCompleted,searchText} = this.state;
    return (
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <h1>Todo App</h1>
            <Search onSearch={this.handleSearch}/>
            <TodoList todos={todos} showCompleted={showCompleted} searchText={searchText} onToggle={this.handleToggle} />
            <AddTodo onNewTodo={this.handleNewTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

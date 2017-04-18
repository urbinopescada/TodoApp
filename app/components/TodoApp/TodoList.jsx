var React = require("react");
var Todo = require("Todo");

module.exports = React.createClass({

  render: function() {
    var {todos,showCompleted,searchText,onCompletedTodo} = this.props;

    var renderTodos = ()=> {
      return todos.map((todo)=>{
        if (!searchText || todo.text.toUpperCase().indexOf(searchText.toUpperCase())>=0){
          if (todo.completed==false || ( todo.completed && showCompleted)) {
            return (
              //we have to give a unique id to react in key
              <Todo key={todo.id} onCompletedTodo={onCompletedTodo} {...todo}/>
            );
          }
        }
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

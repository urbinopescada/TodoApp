var React = require("react");
var Todo = require("Todo");

module.exports = React.createClass({

  render: function() {
    var {todos,showCompleted,searchText,onToggle} = this.props;

    var renderTodos = ()=> {
      return todos.map((todo)=>{
            return (
              //we have to give a unique id to react in key
              <Todo key={todo.id} onToggle={onToggle} {...todo}/>
            );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

var React = require("react");
var Todo = require("Todo");

module.exports = React.createClass({

  render: function() {
    var {todos} = this.props;

    var renderTodos = ()=> {
      return todos.map((todo)=>{
        return (
          //we have to give a unique id to react
          <Todo key={todo.id} {...todo}/>
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

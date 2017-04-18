var React = require("react");

module.exports = React.createClass({
  handleCompleted: function () {
 
    var isComplete = this.refs.chk.checked;

    this.props.onCompletedTodo(this.props.id, isComplete);
  },
  render: function() {
    var {id, text, completed} = this.props;

    return (
      <div>
        <label >
          <input type="checkbox" ref="chk" defaultChecked={completed} onChange={this.handleCompleted}></input>  {id}. {text}
        </label>
      </div>
    );
  }
});

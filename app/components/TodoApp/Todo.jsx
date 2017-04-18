var React = require("react");

module.exports = React.createClass({

  render: function() {
    var {id, text, completed} = this.props;

    return (
      <div onClick={()=>{
          this.props.onToggle( id );
      }} >
        <label >
          <input type="checkbox" ref="chk" defaultChecked={completed}></input>
          {text}
        </label>
      </div>
    );
  }
});

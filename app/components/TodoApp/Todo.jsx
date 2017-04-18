var React = require("react");

module.exports = React.createClass({

  render: function() {
    var {id, text, completed} = this.props;

    return (
      <div>
        <label >
          <input type="checkbox" ref="chk" defaultChecked={completed}
            onClick={()=>{
              this.props.onToggle( id );
            }}></input>
          {text}
        </label>
      </div>
    );
  }
});

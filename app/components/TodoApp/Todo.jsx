var React = require("react");

module.exports = React.createClass({

  render: function() {
    var {id, text} = this.props;

    return (
      <div>

        <input id={"todo"+id} type="checkbox"></input>
        <label htmlFor={"todo"+id} >
          {id} - {text}
        </label>
      </div>
    );
  }
});

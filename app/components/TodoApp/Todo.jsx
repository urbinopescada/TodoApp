var React = require("react");
var moment = require("moment");

module.exports = React.createClass({

  render: function() {
    var {id, text, completed,createdAt,completedAt} = this.props;

    var renderDate= () => {
        if (completed){
          return "Completed " + moment.unix(completedAt).format("MMM Do, YYYY @ h:mm a")
        }
        else {
          return "Created " + moment.unix(createdAt).format("MMM Do, YYYY @ h:mm a")
        }
    };

    return (
      <div>
        <label>
            <input type="checkbox" ref="chk" defaultChecked={completed}
              onClick={()=>{
                this.props.onToggle( id );
              }}></input>
           <p> {text} </p>
           <p> { renderDate() } </p>

        </label>
      </div>
    );
  }
});

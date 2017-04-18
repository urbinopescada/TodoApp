var React = require('react');
var ReactDOM = require('react-dom');

import {Route, Router, IndexRoute, hashHistory} from 'react-router';
var Main = require("Main"); 

////Load foundation using the css loader (ie: css!) and inject the styles into our html, we do that chaining the loaders
// require('style!css!foundation-sites/dist/css/foundation.min.css');

//Fire up foundation
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
);

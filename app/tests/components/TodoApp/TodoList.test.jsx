var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () =>{
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  describe('render', () =>{
    it('sould render correct ammount of items',()=>{
        var todos= [
          {id:1, text:'walk the dog'},
          {id:2, text:'clean the garage'},
          {id:3, text:'Wash the car'},
          {id:4, text:'Prep my speach'}
        ];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        //$el is going to store the root of our component,
        // ReactDOM.findDOMNode(clock)) converts our component into the actual HTML
        var $el = $(ReactDOM.findDOMNode(todoList));
        // now we can use jquery to find the value;
        var items = $el.find("label").length;
        expect(items).toBe(4);

        //Other way - counting the components
        var nrOfTodoRendered = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        expect(nrOfTodoRendered.length).toBe(4);
    });
  });
});

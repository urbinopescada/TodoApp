var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () =>{
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  var text = "new todo";
  var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

  it('should create new todo on handleNewTodo',()=>{
      todoApp.setState({todos:[]});
      todoApp.handleNewTodo(text);

      expect(todoApp.state.todos.length).toBe(1);
      expect(todoApp.state.todos[0].text).toBe(text);
  });

  it('should set completed=true on first handleToggle',()=>{
      todoApp.handleToggle(todoApp.state.todos[0].id);
      expect(todoApp.state.todos[0].completed).toBe(true);
  });
  it('should set completed=false on second handleToggle',()=>{
      todoApp.handleToggle(todoApp.state.todos[0].id);
      expect(todoApp.state.todos[0].completed).toBe(false);
  });
});

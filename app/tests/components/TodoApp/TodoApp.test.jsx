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

  it('should create new todo on handleNewTodo',()=>{
      var text = "new todo";
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

      todoApp.setState({todos:[]});
      todoApp.handleNewTodo(text);

      expect(todoApp.state.todos.length).toBe(1);
      expect(todoApp.state.todos[0].text).toBe(text);
  });
});

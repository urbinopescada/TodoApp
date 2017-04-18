var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () =>{
  beforeEach(() =>{
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', ()=>{
    it('should set valid todos array', () =>{
        var todos = [{id: 12,text: "test all files", completed:false}];
        TodoAPI.setTodos(todos);

        var actualTodos = JSON.parse(localStorage.getItem('todos'));
        expect(actualTodos).toEqual(todos); //toEqual works for objects since compares the values on the objects
    });
    it('should not set invalid todos data', () =>{
        var batTodos = {a: 'b'};
        TodoAPI.setTodos(batTodos);

        expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', ()=>{
    it('should return empty array for bad localstorage data', () =>{
        var actualTodos = TodoAPI.getTodos();
        expect(actualTodos).toEqual([]); //toEqual works for objects since compares the values on the objects
    });
    it('should return todos for good localstorage data', () =>{
        var todos = [{id: 12,text: "test all files", completed:false}];
        TodoAPI.setTodos(todos);
        var actualTodos = TodoAPI.getTodos();
        expect(actualTodos).toEqual(todos); //toEqual works for objects since compares the values on the objects
    });

  });

});

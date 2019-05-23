const React = require('react');
const { Component } = React;
const ReactDOM = require('react-dom');

export default class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['make something', 'eat', 'something else'],
      age: 28,
    };
  }

  render() {
    let todos = this.state.todos;
    todos = todos.map((item, index) => {
      return (
         <TodoItem item={item} key={index} />
      );
    });
    return (
      <div id="todo-list">
        <p>Bla bla</p>
        <p>{this.state.age}</p>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
};

class TodoItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li>{this.props.item}</li>
    );
  };
}

ReactDOM.render(<TodoComponent />, document.querySelector('#todo-wrapper'));

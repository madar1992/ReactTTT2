import React, { Component } from "react";

class TodoList extends Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>
              <input type="checkbox" checked={item.completed} onChange={() => this.props.toggleCompleted(item.id)} />
              <span>{item.title}</span>
              <span>{item.description}</span>
              <button onClick={() => this.props.deleteTodoItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      );
    }
  }

  export default TodoList
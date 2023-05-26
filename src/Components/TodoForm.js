import React, { Component } from "react";
class TodoForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        description: ''
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.addTodoItem(this.state);
      this.setState({
        title: '',
        description: ''
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="Title" />
          <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} placeholder="Description" />
          <button type="submit">Add Item</button>
        </form>
      );
    }
  }

  export default TodoForm
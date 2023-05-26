import React, { Component } from "react";
import Footer from './Footer';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
      this.addTodoItem = this.addTodoItem.bind(this);
      this.toggleCompleted = this.toggleCompleted.bind(this);
      this.deleteTodoItem = this.deleteTodoItem.bind(this);
    }
  
    addTodoItem(item) {
      const newItem = {
        id: Date.now(),
        title: item.title,
        description: item.description,
        completed: false
      };
      this.setState(state => ({
        items: state.items.concat(newItem)
      }));
    }
  
    toggleCompleted(id) {
      const updatedItems = this.state.items.map(item => {
        if (item.id === id) {
          return Object.assign({}, item, {
            completed: !item.completed
          });
        }
        return item;
      });
      this.setState({
        items: updatedItems
      });
    }
  
    deleteTodoItem(id) {
      const updatedItems = this.state.items.filter(item => item.id !== id);
      this.setState({
        items: updatedItems
      });
    }
  
    render() {
      return (
        <div>
          <Header />
          <TodoForm addTodoItem={this.addTodoItem} />
          <TodoList items={this.state.items} toggleCompleted={this.toggleCompleted} deleteTodoItem={this.deleteTodoItem} />
          <Footer />
        </div>
      );
    }
  }
export default Main  
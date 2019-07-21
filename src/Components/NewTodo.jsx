import React, { Component } from "react";
import db from "../Utils/db";

class NewTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  addTodo = async event => {
    event.preventDefault();
    const { refreshTodos } = this.props;
    const { text } = this.state;

    await db.addTodo(text);
    refreshTodos();
    this.setState({
      text: ""
    });
  };

  render() {
    const { text } = this.state;

    return (
      <div className="NewTodo">
        <form>
          <input value={text} onChange={this.handleChange}></input>
          <input type="submit" value="Add" onClick={this.addTodo}></input>
        </form>
      </div>
    );
  }
}

export default NewTodo;

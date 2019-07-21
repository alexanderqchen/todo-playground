import React, { Component } from "react";
import db from "../Utils/db";

class Todo extends Component {
  deleteTodo = async () => {
    const { _id, refreshTodos } = this.props;

    await db.deleteTodo(_id);
    refreshTodos();
  };

  render() {
    const { text } = this.props;

    return (
      <div className="Todo">
        <p>{text}</p>
        <button onClick={this.deleteTodo}>Delete</button>
      </div>
    );
  }
}

export default Todo;

import React, { Component } from "react";
import db from "./Utils/db";
import NewTodo from "./Components/NewTodo";
import Todo from "./Components/Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const res = await db.getAllTodos();
    this.setState({ data: res.data.data });
  }

  refreshTodos = async () => {
    const res = await db.getAllTodos();
    this.setState({ data: res.data.data });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        {data.map(({ _id, text }) => (
          <Todo
            key={_id}
            _id={_id}
            text={text}
            refreshTodos={this.refreshTodos}
          ></Todo>
        ))}
        <NewTodo refreshTodos={this.refreshTodos}></NewTodo>
      </div>
    );
  }
}

export default App;

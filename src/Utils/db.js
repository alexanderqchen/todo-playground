import Axios from "axios";

const BASE_URL =
  "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todo_app-jgeip/service/todo/incoming_webhook/";

const getAllTodos = async () => {
  return await Axios.get(BASE_URL + "getAllTodos");
};

const addTodo = async text => {
  return await Axios.post(BASE_URL + "addTodo", { text });
};

const deleteTodo = async _id => {
  return await Axios.delete(BASE_URL + `deleteTodo?_id=${_id}`);
};

export default {
  getAllTodos,
  addTodo,
  deleteTodo
};

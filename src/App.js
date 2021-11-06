import React, { Component, useEffect, useState } from "react";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";

function Todos() {
  let d = new Date();
  let day = new Array(7);
  let todo;
  let currentList;
  let data = {
    TodoList1: [
      {
        id: 1,
        text: "Eat Breakfast",
        note: "Make Eggs and Pancakes",
        done: false
      },
      { id: 2, text: "Walk Dog", note: "Bring doggie bag", done: false },
      { id: 3, text: "Take Shower", note: "Shower early", done: false }
    ],
    TodoList2: [
      { id: 1, text: "Get Lunch", note: "Lunch at sandbox", done: false },
      { id: 2, text: "Run a Mile", note: "Run harder", done: false },
      { id: 3, text: "Take Bath", note: "Prep early", done: false }
    ]
  };

  const [newList, setNewList] = useState(data.TodoList1);

  const handleNote = (getNote) => {
    $("#note").empty().append(getNote);
    $("#notebox").css("visibility", "visible");
  };

  const dismissNote = () => {
    $("#note").empty();
    $("#notebox").css("visibility", "hidden");
  };

  const handleAddTodo = (getItem, currentList) => {
    console.log(newList);
    currentList.push(getItem);
    setNewList(currentList);
  };

  day[0] = "Sunday";
  day[1] = "Monday";
  day[2] = "Tuesday";
  day[3] = "Wednesday";
  day[4] = "Thursday";
  day[5] = "Friday";
  day[6] = "Saturday";

  let n = day[d.getDay()];
  function setup() {
    if (n === "Saturday" || n === "Tuesday" || n === "Monday") {
      currentList = data.TodoList2;

      todo = (
        <TodoList
          todolists={newList}
          handleNote={handleNote}
          dismissNote={dismissNote}
        />
      );
    } else if (
      n === "Sunday" ||
      n === "Wednesday" ||
      n === "Friday" ||
      n === "Thursday"
    ) {
      currentList = data.TodoList2;
      todo = (
        <TodoList
          todolists={newList}
          handleNote={handleNote}
          dismissNote={dismissNote}
        />
      );
    }
  }
  setup();

  return (
    <div className="App">
      <h1>{n}'s Todo List</h1>
      {todo}
      <AddTodo addItem={handleAddTodo} currentList={newList} />
    </div>
  );
}

function AddTodo(props) {
  const submit = (e) => {
    e.preventDefault();
    const currentList = props.currentList;
    const text = e.target.elements.addTodoItem.value;
    const note = e.target.elements.addTodoNote.value;
    const newTodoItem = {
      id: 4,
      text: text,
      note: note,
      done: false
    };
    props.addItem(newTodoItem, currentList);
  };
  return (
    <div className="border border-dark m-4 p-3">
      <form onSubmit={submit}>
        <input
          className="d-block d-sm-inline my-2 mt-3 mx-auto mx-sm-2"
          type="text"
          name="addTodoItem"
          placeholder="Add Todo Item"
        />
        <input
          className="d-block d-sm-inline my-2 mt-3 mx-auto mx-sm-2"
          type="text"
          name="addTodoNote"
          placeholder="Add Todo Note"
        />
        <button className="d-block d-sm-inline mx-auto my-3 mx-sm-2">
          Add
        </button>
      </form>
    </div>
  );
}

export default Todos;

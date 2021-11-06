import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "reactstrap";

export default function Todos(props) {
  return (
    <ListGroup>
      {props.todolists.map((todolist) => {
        return (
          <ListGroupItem
            key={todolist.id}
            className="align-self-center py-2 w-50 bg-info text-white"
            tag="button"
            onClick={() => {
              props.handleNote(todolist.note);
            }}
          >
            {todolist.text}
          </ListGroupItem>
        );
      })}
      <div id="note" className="mt-1 font-weight-bold text-dark"></div>
      <button
        id="btn"
        className="w-25 mt-2 align-self-center bg-warning border-0"
        onClick={() => {
          props.dismissNote();
        }}
      >
        Dismiss
      </button>
    </ListGroup>
  );
}

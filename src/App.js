import React from 'react';
import './style.css';

export default function App() {
  function Item(props) {
    return <li>{props.message}</li>;
  }

  function TodoList() {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    return (
      <ul>
        {todos.map((message) => (
          <Item key={message} message={message} />
        ))}
      </ul>
    );
  }

  return (
    <div>
      <TodoList />
    </div>
  );
}

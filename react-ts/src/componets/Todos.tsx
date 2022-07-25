import React from 'react';

type TodoProps = {
  items: string[];
};

const Todos = ({ items }: TodoProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;

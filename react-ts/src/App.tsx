import React from 'react';
import Todos from './componets/Todos';

const App = () => {
  return (
    <div>
      <Todos items={['Learn React', 'Learn Typescript']} />
    </div>
  );
};

export default App;

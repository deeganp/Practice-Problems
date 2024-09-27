import React from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div className="container">
      <p className="lorem-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
      </p>
      <div className="trash-can-icon">
        <img src="/path/to/trash-can-icon.png" alt="Trash Can" />
        <img src="/path/to/trash-can-icon.png" alt="Trash Can" />
        <img src="/path/to/trash-can-icon.png" alt="Trash Can" />
      </div>
    </div>
  );
};

export default App;

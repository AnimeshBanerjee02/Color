import React from 'react';
import ColorPicker from "D:\\Importants\\Ethanus mern stack internship program course\\React\\colorpicker\\src\\Component\\ColorPicker.js";

const App = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'teal', 'gray'];


  return (
    <div className="app">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;

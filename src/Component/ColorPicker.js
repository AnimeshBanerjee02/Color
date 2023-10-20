import React, { Component } from 'react';
import "D:\\Importants\\Ethanus mern stack internship program course\\React\\colorpicker\\src\\ColorPicker.css";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isColorListVisible: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isColorListVisible: !prevState.isColorListVisible,
    }));
  };

  selectColor = (color) => {
    this.setState({
      selectedColor: color,
      isColorListVisible: false,
    });
  };

  render() {
    const { colors } = this.props;
    const { isColorListVisible, selectedColor } = this.state;

    return (
      <div className="color-picker">
        <button onClick={this.toggleColorList}>Pick a color</button>
        {isColorListVisible && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-box"
                style={{ backgroundColor: color }}
                onClick={() => this.selectColor(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && <p>You picked: {selectedColor}</p>}
      </div>
    );
  }
}

export default ColorPicker;

import React, { Component } from "react";
import PropTypes from "prop-types";
import ColorsComponent from "./ColorsComponent/ColorsComponent.js";
import styles from "./ColorsSelector.css";
class ColorsSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectColor: null
    };
  }

  onChangeHandler = selectColor => {
    this.setState({ selectColor });
  };

  render() {
    let { colors, changeColor, defaultColor } = this.props;
    let { selectColor } = this.state;
    return (
      <div className={styles.colorsSelector}>
        {colors.map((color, i) => {
          return (
            <ColorsComponent
              key={i}
              color={color}
              selectColor={selectColor ? selectColor : defaultColor}
              changeValue={this.onChangeHandler}
              onChange={event => {
                changeColor(event, i, color);
              }}
            />
          );
        })}
      </div>
    );
  }
}

ColorsSelector.propTypes = {
  colors: PropTypes.array,
  changeColor: PropTypes.func,
  defaultColor: PropTypes.string
};

export default ColorsSelector;

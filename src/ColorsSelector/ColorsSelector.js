import React, { Component } from "react";
import PropTypes from "prop-types";
import ColorsComponent from "./ColorsComponent/ColorsComponent.js";
import styles from "./ColorsSelector.css";
class ColorsSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 0
    };
  }

  onChangeHandler = index => {
    this.setState({ select: index });
  };

  render() {
    let { colors } = this.props;
    return (
      <div className={styles.colorsSelector}>
        {colors.map((color, i) => {
          return (
            <ColorsComponent
              key={i}
              color={color}
              select={this.state.select}
              index={i}
              changeValue={this.onChangeHandler}
            />
          );
        })}
      </div>
    );
  }
}

ColorsSelector.propTypes = {
  colors: PropTypes.array
};

export default ColorsSelector;

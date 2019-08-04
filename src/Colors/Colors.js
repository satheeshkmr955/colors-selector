import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Colors.css";
import { CSSTransition } from "react-transition-group";

class Colors extends Component {
  render() {
    let { color, select, index, changeValue } = this.props;
    const cssStyles = {
      background: color
    };
    const hideBorder = {
      border: "#00000000 solid 1px"
    };
    return (
      <CSSTransition timeout={200}>
        <div
          style={select === index ? null : hideBorder}
          className={styles.active}
        >
          <label style={cssStyles} className={styles.color}>
            <input
              style={cssStyles}
              className={select === index ? styles.radio : styles.radio}
              type="radio"
              id={color}
              value={color}
              checked={select === index ? true : false}
              onChange={() => {
                changeValue(index);
              }}
            />
          </label>
        </div>
      </CSSTransition>
    );
  }
}

Colors.propTypes = {
  color: PropTypes.string,
  select: PropTypes.number,
  index: PropTypes.number,
  changeValue: PropTypes.func
};

export default Colors;

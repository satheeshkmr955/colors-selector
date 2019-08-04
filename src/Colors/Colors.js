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
    return (
      <CSSTransition timeout={200}>
        <div
          className={
            select === index
              ? styles.active
              : [styles.active, styles.hideBorder].join(" ")
          }
        >
          <label
            style={cssStyles}
            className={
              select === index
                ? [styles.color, styles.hideBorder].join(" ")
                : styles.color
            }
          >
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

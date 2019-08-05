import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ColorsComponent.css";
import { CSSTransition } from "react-transition-group";
import { bounceIn } from "animate.css";
class Colors extends Component {
  render() {
    let { color, selectColor, changeValue, onChange } = this.props;
    const cssStyles = {
      background: color
    };
    return (
      <CSSTransition timeout={200}>
        <div
          className={
            color === selectColor
              ? [styles.active, bounceIn].join(" ")
              : [styles.active, styles.hideBorder].join(" ")
          }
          onChange={onChange}
        >
          <label
            style={cssStyles}
            className={
              color === selectColor
                ? [styles.color, styles.hideBorder].join(" ")
                : [styles.color].join(" ")
            }
          >
            <input
              style={cssStyles}
              className={color === selectColor ? styles.radio : styles.radio}
              type="radio"
              id={color}
              value={color}
              checked={color === selectColor}
              onChange={() => {
                changeValue(color);
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
  selectColor: PropTypes.string,
  changeValue: PropTypes.func,
  onChange: PropTypes.func
};

export default Colors;

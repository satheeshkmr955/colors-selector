import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ColorsComponent.css";
import { CSSTransition } from "react-transition-group";
import { bounceIn } from "animate.css";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;
class Colors extends Component {
  render() {
    let { color, selectColor, changeValue, onChange } = this.props;
    const cssStyles = {
      background: color
    };
    return (
      <CSSTransition timeout={200}>
        <>
          <div className={styles.container}>
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
                  className={styles.radio}
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
            <div className={[styles.tooltip].join(" ")}>{color}</div>
          </div>
        </>
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

import React from "react";
import PropTypes from "prop-types";

const Binance = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 2000 2000">
    <g fill="none" fillRule="evenodd">
      <circle cx="16" cy="16" r="16" fill="#fff" />
      <g fill="#f3ba2f">
        <path d="M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z" />
        <path d="M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11" />
      </g>
    </g>
  </svg>
);

Binance.defaultProps = {
  width: "32",
  height: "32",
};

Binance.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Binance;

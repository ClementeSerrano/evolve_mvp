import React from "react";
import PropTypes from "prop-types";

const Litecoin = ({ width = "32", height = "32" }) => (
  <svg width={width} height={height} viewBox="0 0 32 32">
    <g fill="none" fillRule="evenodd">
      <circle cx="16" cy="16" r="16" fill="#BFBBBB" />
      <path
        fill="#FFF"
        d="M10.427 19.214L9 19.768l.688-2.759 1.444-.58L13.213 8h5.129l-1.519 6.196 1.41-.571-.68 2.75-1.427.571-.848 3.483H23L22.127 24H9.252z"
      />
    </g>
  </svg>
);

Litecoin.defaultProps = {
  width: "32",
  height: "32",
};

Litecoin.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Litecoin;

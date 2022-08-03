import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { onClick, text } = props;
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
};

export default Button;

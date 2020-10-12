import React from 'react';
import PropTypes, { oneOf } from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  const { type, className, children, disabled, kind, size } = props;

  const btnClass = classNames(className, {
    'btn-info': kind === 'info',
    'btn-danger': kind === 'danger',
    'btn-primary': kind === 'primary',
    'btn-small': size === 'small',
    'btn-medium': size === 'medium',
    'btn-large': size === 'large',
    'btn-small-100': size === 'small-100',
    'btn-medium-100': size === 'medium-100',
    'btn-large-100': size === 'large-100'
  });

  return (
    <button
      {...props}
      type={type || 'button'}
      className={btnClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const ButtonTypes = {
  buttonKind: oneOf(['danger', 'info', 'primary', 'warning'])
};

const SizeTypes = {
  size: oneOf([
    'small',
    'medium',
    'large',
    'small-100',
    'medium-100',
    'large-100'
  ])
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  className: 'btn',
  kind: 'nextel',
  children: 'Button',
  size: 'large'
};

Button.propTypes = {
  /**
   * Specify the type of your button
   */
  type: PropTypes.oneOf(['submit', 'button', 'reset']),

  /**
   * Specify the content of your Button
   */
  children: PropTypes.node,

  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Specify the classes of your Button
   */
  className: PropTypes.string,

  /**
   * Specify the kind of Button you want to create
   */
  kind: ButtonTypes.buttonKind,

  /**
   * Specify the button size you want to create
   */
  size: SizeTypes.size
};

export default Button;

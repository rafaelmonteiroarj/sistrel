import React from 'react';
import PropTypes, { oneOf } from 'prop-types';
import classNames from 'classnames';

import * as S from './styles';

const Input = React.forwardRef((props, ref) => {
  const {
    type,
    typeInput,
    className,
    placeholder,
    shadow,
    name,
    value,
    onChange,
    error,
    size,
    disabled,
    maxLength
  } = props;

  const btnClass = classNames(className, {
    'shadow-1': shadow === true,
    'is-invalid-formik': error === true,
    'is-valid-formik': error === false,
    'input-field-regular': size === 'regular',
    'input-field-100': size === 'large-100',
    'input-search': typeInput === 'input-search',
    'input-field': typeInput === 'input-field'
  });

  return (
    <S.InputAddOn>
      <S.InputAddOnField
        ref={ref}
        size={size}
        disabled={disabled}
        name={name}
        type={type}
        typeInput={typeInput}
        className={btnClass}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        maxLength={maxLength}
      />
    </S.InputAddOn>
  );
});

const SizeTypes = {
  size: oneOf(['regular', 'large-100'])
};

const TypesInput = {
  typeInput: oneOf(['input-search', 'input-field'])
};

const Types = {
  type: oneOf(['file', 'number', 'password', 'search', 'text', 'time'])
};

Input.defaultProps = {
  type: 'text',
  typeInput: 'input-field',
  className: '',
  placeholder: 'Informe um valor ...',
  shadow: false,
  error: false,
  disabled: false,
  maxLength: 255,
  value: ''
};

Input.propTypes = {
  /**
   * Specify the type of your input
   */
  type: Types.type,

  /**
   * Specify the type of the button ... if and search or insert.
   */
  typeInput: TypesInput.typeInput,

  /**
   * Specify the classes of your input
   */
  className: PropTypes.string,

  /**
   * Specify the placeholder of your input
   */
  placeholder: PropTypes.string,

  /**
   * Specify whether the input should have a border
   */
  shadow: PropTypes.bool,

  /**
   * Specify the name of your input
   */
  name: PropTypes.string.isRequired,

  /**
   * Specify the value of your input
   */
  value: PropTypes.string,

  /**
   * Specify whether the input should be flagged in error.
   */
  error: PropTypes.bool,

  /**
   * Specify the input size you want to create
   */
  size: SizeTypes.size.isRequired,

  /**
   * Specify whether the input should be flagged in disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Specify maximum length of characters
   */
  maxLength: PropTypes.number
};

export default Input;

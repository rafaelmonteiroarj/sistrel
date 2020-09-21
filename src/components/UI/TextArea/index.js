import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import * as S from './styles';

const TextArea = React.forwardRef((props, ref) => {
  const {
    className,
    placeholder,
    shadow,
    name,
    value,
    onChange,
    error,
    disabled
  } = props;

  const btnClass = classNames(className, {
    'shadow-1': shadow === true,
    'is-invalid-formik': error === true,
    'is-valid-formik': error === false
  });

  return (
    <S.TextAreaAddOn>
      <S.TextAreaAddOnField
        ref={ref}
        disabled={disabled}
        name={name}
        className={btnClass}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
      />
    </S.TextAreaAddOn>
  );
});

TextArea.defaultProps = {
  className: '',
  placeholder: 'Informe um valor ...',
  shadow: false,
  error: false,
  disabled: false,
  value: ''
};

TextArea.propTypes = {
  /**
   * Specify the classes of your TextArea
   */
  className: PropTypes.string,

  /**
   * Specify the placeholder of your TextArea
   */
  placeholder: PropTypes.string,

  /**
   * Specify whether the TextArea should have a border
   */
  shadow: PropTypes.bool,

  /**
   * Specify the name of your TextArea
   */
  name: PropTypes.string.isRequired,

  /**
   * Specify the value of your TextArea
   */
  value: PropTypes.string,

  /**
   * Specify whether the TextArea should be flagged in error.
   */
  error: PropTypes.bool,

  /**
   * Specify whether the TextArea should be flagged in disabled.
   */
  disabled: PropTypes.bool
};

export default TextArea;

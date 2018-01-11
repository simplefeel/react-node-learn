import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

var Divider = createReactClass({
  displayName: 'Divider',

  propTypes: {
    className: PropTypes.string,
    rootPrefixCls: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    // To fix keyboard UX.
    return { disabled: true };
  },
  render: function render() {
    var _props = this.props,
        _props$className = _props.className,
        className = _props$className === undefined ? '' : _props$className,
        rootPrefixCls = _props.rootPrefixCls;

    return React.createElement('li', { className: className + ' ' + rootPrefixCls + '-item-divider' });
  }
});

export default Divider;
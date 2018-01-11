import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

var MenuItemGroup = createReactClass({
  displayName: 'MenuItemGroup',

  propTypes: {
    renderMenuItem: PropTypes.func,
    index: PropTypes.number,
    className: PropTypes.string,
    rootPrefixCls: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    // To fix keyboard UX.
    return { disabled: true };
  },
  renderInnerMenuItem: function renderInnerMenuItem(item, subIndex) {
    var _props = this.props,
        renderMenuItem = _props.renderMenuItem,
        index = _props.index;

    return renderMenuItem(item, index, subIndex);
  },
  render: function render() {
    var props = this.props;
    var _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        rootPrefixCls = props.rootPrefixCls;

    var titleClassName = rootPrefixCls + '-item-group-title';
    var listClassName = rootPrefixCls + '-item-group-list';
    return React.createElement(
      'li',
      { className: className + ' ' + rootPrefixCls + '-item-group' },
      React.createElement(
        'div',
        {
          className: titleClassName,
          title: typeof props.title === 'string' ? props.title : undefined
        },
        props.title
      ),
      React.createElement(
        'ul',
        { className: listClassName },
        React.Children.map(props.children, this.renderInnerMenuItem)
      )
    );
  }
});

MenuItemGroup.isMenuItemGroup = true;

export default MenuItemGroup;
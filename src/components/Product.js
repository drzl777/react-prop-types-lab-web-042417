// Code Product Component Here

import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h2>{this.props.name}</h2>
        <h3>{this.props.producer}</h3>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    if (!props[propName]) {
      return new Error(
        `missing ${propName}`
      )
    }
    if (typeof props[propName] !== 'number') {
      return new Error(
        `${propName} not a number`
      )
    }
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error(
        `${propName} outside range`
      )
    }
  }
}

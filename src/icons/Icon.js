import React, { Component } from 'react'

/**
 * Base class for icons
 */
export default class Icon extends Component {

  /**
   * Render icon
   * @return {js}
   */
  render() {
    const {iconClass} = this
    const {size, color, className} = this.props
    return <i className={`${iconClass} iconsize-${size} iconcolor-${color} ${className}`}/>
  }
}

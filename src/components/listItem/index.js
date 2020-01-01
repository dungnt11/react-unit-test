import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ListItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
  }

  render() {
    const { title, desc } = this.props;

    if (!title) return null;

    return (
      <div data-test="listItemComponent">
        <h2 data-test="componentTitle">{title}</h2>
        <div data-test="componentDesc">
          {desc}
        </div>
      </div>
    )
  }
}

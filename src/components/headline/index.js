import React, { Component } from 'react'
import PropsTypes from 'prop-types';

export default class Headline extends Component {
  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="descWrapper">{desc}</p>
      </div>
    )
  }
}

Headline.propTypes = {
  header: PropsTypes.string,
  desc: PropsTypes.string,
  tempArr: PropsTypes.arrayOf(PropsTypes.shape({
    name: PropsTypes.string,
    age: PropsTypes.number,
    married: PropsTypes.bool,
  }))
}

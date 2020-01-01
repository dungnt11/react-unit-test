import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className="header" data-test="component-header">
        <img id="logo" src="/logo192.png" data-test="header-logo" />
      </header>
    )
  }
}

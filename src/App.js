import React, { Component } from 'react'

import './app.scss';
import Header from './components/headers';
import Headline from './components/headline'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="main">
          <Headline />
        </section>
      </div>
    )
  }
}

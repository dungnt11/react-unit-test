import React, { Component } from 'react'

import './app.scss';
import Header from './components/headers';
import Headline from './components/headline'

export default class App extends Component {
  render() {

    const info = [{
      name: "Joe",
      age: 20,
      married: false,
    }];

    return (
      <div>
        <Header />
        <section className="main">
          <Headline header="Header" desc="Description" tempArr={{ info }} />
        </section>
      </div>
    )
  }
}

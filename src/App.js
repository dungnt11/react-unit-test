import React, { Component } from 'react'

import './app.scss';
import Header from './components/headers';
import Headline from './components/headline';
import Button from './components/button';
import ListItem from './components/listItem';
import { connect } from 'react-redux';
import { fetchPost } from './actions';

class App extends Component {
  state = {
    hideBtn: false
  }

  fetch() {
    this.props.fetchPost();
    this.changeValue();
  }

  changeValue() {
    const { hideBtn } = this.state;
    this.setState({ hideBtn: !hideBtn });
  }

  render() {
    const { posts } = this.props;
    const info = [{
      name: "Joe",
      age: 20,
      married: false,
    }];

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch.bind(this)
    };

    const { hideBtn } = this.state;

    return (
      <div data-test='appComponent'>
        <Header />
        <section className="main">
          <Headline header="Header" desc="Description" tempArr={info} />
        </section>

        {posts.length ? <div>
          {posts.map((item, index) => {
            const { title, body } = item;
            return <ListItem title={title} desc={body} key={index} />
          })}
        </div> : null}
        {!hideBtn ? <Button {...configButton} /> : null}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}


export default connect(mapStateToProps, { fetchPost })(App);
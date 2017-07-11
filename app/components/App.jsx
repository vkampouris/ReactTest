import React from 'react';

export default class App extends React.Component {
  render() {
    return (
     <div>
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
     <div>
        <h1>Top Header</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
     <div>
        <p>This is some content</p>
      </div>
    );
  }
}

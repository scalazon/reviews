import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Famazon Reviews'
    };
  }

  render() {
    return <div class="container">{this.state.text}</div>;
  }
}

export default App;

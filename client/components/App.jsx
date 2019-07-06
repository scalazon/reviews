import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Famazon Reviews'
    };
  }

  render() {
    const { text } = this.state;
    return <div className="container btn-primary">{text}</div>;
  }
}

export default App;

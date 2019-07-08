import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: ''
    };
  }

  componentDidMount() {
    axios.get('/reviews').then(response => {
      console.log(
        'Recieved the following data from GET to /reviews:',
        response.data
      );

      this.setState({
        reviews: response.data
      });
    });
  }

  render() {
    const { reviews } = this.state;

    return (
      <div className="container">
        <div className="row h2">Reviews</div>
        <div className="row h4">{reviews.summary}</div>
        <div className="row">{reviews.reviewText}</div>
      </div>
    );
  }
}

export default App;

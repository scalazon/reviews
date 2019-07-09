import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    // TODO: Make the ASIN dynamic
    axios.get('/reviews/B00002N8K3').then(response => {
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

    if (reviews.length === 0) {
      return (
        <div className="container">
          <div className="row h2">Reviews</div>
        </div>
      );
    }

    const firstReview = reviews[0];

    return (
      <div className="container">
        <div className="row h2">Reviews</div>
        <div className="row h4">{firstReview.summary}</div>
        <div className="row">{firstReview.reviewText}</div>
      </div>
    );
  }
}

export default App;

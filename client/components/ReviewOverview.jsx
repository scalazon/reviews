import React from 'react';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar.jsx';
import '../styles/scss/ReviewOverview.scss';
import ReviewBreakdown from './ReviewBreakdown.jsx';
class ReviewOverview extends React.Component {
  componentDidMount() {}

  render() {
    const { summary, summaryIsLoading, summaryNotFound } = this.props;
    if (summaryIsLoading) {
      return (
        <div className="row">
          <div className="col">
            <h5>Summary Loading...</h5>
          </div>
        </div>
      );
    }
    if (summaryNotFound) {
      return (
        <div className="row">
          <div className="col">
            <h5>Summary Not Found...</h5>
          </div>
        </div>
      );
    }

    return (
      <div className="row">
        <h5 className="col-12">{summary.reviewCount} customer reviews</h5>
        <div className="col-12">
          <ReviewBreakdown summary={summary} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    summary: state.summary,
    summaryIsLoading: state.summaryIsLoading,
    summaryNotFound: state.summaryNotFound
  };
};

export default connect(
  mapStateToProps,
  null
)(ReviewOverview);

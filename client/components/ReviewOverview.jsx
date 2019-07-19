import React from 'react';
import { connect } from 'react-redux';
import '../styles/scss/ReviewOverview.scss';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import StarRating from './StarRating.jsx';
class ReviewOverview extends React.Component {
  componentDidMount() {
    // Will be used if/when caching of review summaries is implemented
  }

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
          <h6>
            <StarRating overall={summary.overall} /> {summary.overall}
          </h6>
        </div>
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

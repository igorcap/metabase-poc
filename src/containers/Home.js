import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends React.Component {
  componentDidMount() {
      this.props.fetchMetabase();
  }
  render() {
    const { baseUrl, metabaseToken } = this.props;
    let iframeUrl = ""
    if (metabaseToken) {
      iframeUrl = baseUrl + "/embed/question/" + metabaseToken + "#bordered=true&titled=true";
    };
    return (
      <React.Fragment>     
      {metabaseToken &&
        <iframe
          src={iframeUrl}
          frameBorder={0}
          width={800}
          height={600}
          allowTransparency
        />
      }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  metabaseToken: state.metabaseReducer.metabase,
  baseUrl: state.metabaseReducer.baseUrl
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(Home);


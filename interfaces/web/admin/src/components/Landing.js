import React, { Component }  from "react";
import { 
  Button as ShardButton, 
  Col, 
  Row 
} from "shards-react";
import flowRight from 'lodash/flowRight';
import { connect } from "react-redux";
import { withRouter } from "next/router"; 

import Header from "./configure/landing/Header";
import Overview from "./configure/landing/Overview";
import Themes from "./configure/landing/Themes";
import Footer from "./configure/landing/Footer";
import Sidebar from "./configure/landing/Sidebar";
import ContributionWidget from "./configure/landing/ContributionWidget";
import MetaTags from "./configure/landing/MetaTags";

import nextI18NextInstance from '../../i18n';
import { fetchDebateRequest } from "../actions/debate";

const { withTranslation } = nextI18NextInstance;

const getCurrentLang = () =>  'en';

class Landing extends Component {
  componentDidMount() {
    const { dispatch } = this.props;    
    const { router: { query: { name } } } = this.props;

    dispatch(
      fetchDebateRequest(name)
    );
  }

  state = {
    metaTagsOpen: false
  };

  handleClose = () => {
    this.setState({
      metaTagsOpen: false
    })
  }

  render() {
    const { debate: { debate } } = this.props;
    const { router: { query: { slug } } } = this.props;
    const { metaTagsOpen } = this.state;
    
    return (
      <>
        <Row>  
          <Col lg="12" md="12" sm="12" className="mb-3">
            <Header title={slug} debate={debate} />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12" className="mb-3">
            {debate ?
            (<Overview debate={debate} />) : null}
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12" className="mb-3">
            {debate ?
              (<Themes debate={debate} />) : null}
          </Col>
        </Row>            
        <Row>
          <Col lg="1" md="1" sm="1" className="mb-3">
          </Col>
          <Col lg="7" md="7" sm="7" className="mb-7">
            <ContributionWidget />
          </Col>
          <Col lg="4" md="4" sm="4" className="mb-4">
            {debate ?
                (<Sidebar debate={debate} />) : null}
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12" className="mb-3">
            <Footer debate={debate} />
          </Col>
        </Row>
        <Row>
          <Col lg="2" md="2" sm="2" className="mb-2">
            <ShardButton 
              type="button"
              theme="dark"
              onClick={() => {
                this.setState({
                  metaTagsOpen: true
                })
              }}
            >Meta Tags</ShardButton>
              <MetaTags debate={debate} open={metaTagsOpen} handleClose={this.handleClose} />
          </Col>
        </Row>
      </>
    )
  }
}

export default flowRight(
  connect(state => state),
  withRouter,
  withTranslation(['common'])
)(Landing);
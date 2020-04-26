import React, { Component }  from "react";
import { Button, Col, Form, FormGroup, Row } from "shards-react";
import flowRight from 'lodash/flowRight';
import { connect } from "react-redux";
import { withRouter } from "next/router"; 
import Grid from "@material-ui/core/Grid";

import Header from "./configure/landing/Header";
import Overview from "./configure/landing/Overview";
import Themes from "./configure/landing/Themes";
import Footer from "./configure/landing/Footer";

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

  render() {
    const { debate: { debate } } = this.props;
    const { router: { query: { slug } } } = this.props;

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
          <Col lg="12" md="12" sm="12" className="mb-3">
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
          </Col>
        </Row>
        <Row>
          <FormGroup>
            <Row form>
              <Col lg="2" md="2" sm="2" className="mb-2" />
              <Col lg="3" md="3" sm="3" className="mb-3">
                  <Button type="submit">Update Footer</Button>
              </Col>
            </Row>
          </FormGroup>
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
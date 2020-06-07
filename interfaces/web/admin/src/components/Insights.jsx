import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "shards-react";
import { useDispatch, useSelector } from "react-redux";
import flowRight from 'lodash/flowRight';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import PageTitle from "./common/PageTitle";

import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

const nodes = [{
    "text": "python",
    "url": "http://www.wikiwand.com/en/Python_(programming_language)",
    "fx": -13.916222252976013,
    "fy": -659.1641376795345,
    "category": "wiki",
    "note": ""
    },
    {
        "text": "basics",
        "url": "http://www.wikiwand.com/en/Python_(programming_language)",
        "fx": -16.916222252976013,
        "fy": -659.1641376795345,
        "category": "wiki",
        "note": ""
    }
];

const connections = [{
    "source": "python",
    "target": "basics",
    "curve": {
      "x": -43.5535,
      "y": 299.545
    }
}]

function Insights (props) {
    const { t } = props;
    let MindMap =  null;

    if (process.browser) {
        MindMap = require('react-mindmap');
        console.log('MindMap', MindMap)
    }

    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle title={t('profile')} subtitle={t('overview')} md="12" className="ml-sm-auto mr-sm-auto" />
            </Row>
            <Row>
            </Row>
        </Container>
    )
}

export default flowRight(
    withTranslation(['common'])
)(Insights);
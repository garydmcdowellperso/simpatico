import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "shards-react";
import { Box } from "grommet";
import { useDispatch, useSelector } from "react-redux";
import flowRight from 'lodash/flowRight';

import PageTitle from "./PageTitle";
import UserDetails from "./UserDetails";
import UserAccountDetails from "./UserAccountDetails";
import Nav from "./nav";

import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

import { getCurrentLang } from '../lib/utils';

function Main (props) {
    const { t } = props;

    const [userDetails, setUserDetails] = useState(null)

    const error = useSelector(state => state.auth.error);
    const processing = useSelector(state => state.auth.processing);
    const { avatar, bio, id, firstName, lastName, email, score, likes, dislikes, contributions, badge } = useSelector(state => state.auth);

    useEffect(() => { // Fire once we get user data
        if (id) {
            setUserDetails({
                id,
                firstName,
                lastName,
                avatar,
                performanceReportValue: score,
                bio,
                email,
                likes,
                dislikes,
                contributions,
                badge       
            });
        }
    }, [id]);

    const { onClick } = props;

    return (
        <Container fluid className="main-content-container px-4">
            <Box gridArea="header">
                <Nav onClick={onClick} />
            </Box>
            <Row noGutters className="page-header py-4">
                <PageTitle title={t('profile')} subtitle={t('overview')} md="12" className="ml-sm-auto mr-sm-auto" />
            </Row>
            <Row>
            <Col lg="4">
                {userDetails ? (
                <UserDetails userDetails = {userDetails} /> ) : null}
            </Col>
            <Col lg="8">
                <UserAccountDetails userDetails = {userDetails} />
            </Col>
            </Row>
        </Container>
    )
}

export default flowRight(
    withTranslation(['common'])
)(Main);
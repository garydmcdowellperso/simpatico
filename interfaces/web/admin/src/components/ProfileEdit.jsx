import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "shards-react";
import { useDispatch, useSelector } from "react-redux";
import flowRight from 'lodash/flowRight';
import { useRouter } from 'next/router'

import PageTitle from "./common/PageTitle";
import UserDetails from "./configure/user/UserDetails";
import UserAccountDetails from "./configure/user/UserAccountDetails";

import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

import { fetchUserInfoAdmin } from "../actions/users";
import { fetchDebatesRequest } from "../actions/debate";

import { getCurrentLang } from '../lib/utils';

function ProfileEdit (props) {
    const router = useRouter()

    const { t } = props;

    const { query: { userId } } = router;

    const [userDetails, setUserDetails] = useState(null)

    const dispatch = useDispatch();

    const error = useSelector(state => state.auth.error);
    const processing = useSelector(state => state.auth.processing);
    const { debates, role, avatar, bio, id, firstName, lastName, email, score, likes, dislikes, contributions, badge } = useSelector(state => state.users);

    const debatesAll = useSelector(state => state.debate.debates);

    useEffect(() => { // Fire once
        if (debatesAll.length === 0) {
            dispatch(fetchDebatesRequest(localStorage.getItem("accountId")));
        }
        if (!id) {
            dispatch(fetchUserInfoAdmin(userId, localStorage.getItem("accountId")));
        }
    }, []);

    useEffect(() => { // Fire once we get user data
        if (id && debatesAll.length > 0) {

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
                badge,
                debates,
                role,
                debatesAll       
            });
        }
    }, [id]);

    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle title={t('profile')} subtitle={t('overview')} md="12" className="ml-sm-auto mr-sm-auto" />
            </Row>
            <Row>
            <Col lg="4">
                {userDetails && userDetails.likes ? (
                <UserDetails userDetails = {userDetails} /> ) : null}
            </Col>
            <Col lg="8">
                {userDetails && userDetails.likes ? (
                <UserAccountDetails userDetails = {userDetails} />) : null}
            </Col>
            </Row>
        </Container>
    )
}

export default flowRight(
    withTranslation(['common'])
)(ProfileEdit);
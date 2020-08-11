import React, { useEffect } from "react";
import Head from 'next/head'
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { init } from "@socialgouv/matomo-next";
import flowRight from 'lodash/flowRight';


import Header from "../components/Header";
import Overview from "../components/Overview";
import Theme from "../components/Theme";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import nextI18NextInstance from '../../i18n';
import config from '../../config';

import { setDebateRequest } from '../actions/debate';
import { fetchPostsRequest } from '../actions/posts';

const { withTranslation } = nextI18NextInstance;

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  },
}));

function Home(debateServer) {
  const dispatch = useDispatch();

  console.log('debateServer', debateServer)
  if (JSON.stringify(debateServer) !== '{}') {
    console.log('dispatching')
    // Put the server side fetch into client side store
    dispatch(setDebateRequest(debateServer))
  }

  const debate = useSelector(state => state.debate.debate);
  const { posts } = useSelector(state => state.posts);
  const { isValidToken, accountId } = useSelector(state => state.auth);

  useEffect(() => {
    if (debate && debate.trackingId) {
      init({ url: `https://${config.matomo.host}`, siteId: debate.trackingId });
    }
  }, []);

  useEffect(() => {
    if (debate && debate.debateType === 'private') {
      if (isValidToken === false) {
        window.location.href = '/login/';
      }
    }
  }, [isValidToken, debate]);

  useEffect(() => {
    if (debate && debate.debateType === 'private') {
      if (isValidToken === true) {
        if (posts.length === 0) {
          if (!!accountId) {
            dispatch(fetchPostsRequest(accountId));
          }
        }
      }
    }
  }, [accountId]);


  const classes = useStyles();

  console.log('debate', debate)
  if (debate === {}) {
    return (<div/>)
  }

  return (
    <div>
      <Head>
        <title>{debate.url}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {debate && debate.metaTags && debate.metaTags.map((tag, idx) => {url
            if (tag.type === 'property') {
              return (<meta property={tag.typevalue} content={tag.content} key={idx} />)
            } else  {
              return (<meta name={tag.typevalue} content={tag.content} key={idx} />)
            }
        })}
      </Head>
      {debate && debate.url ? (
      <>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header selected='home' title={debate.name} header={debate.header} />
          <main>
            <Overview data={debate.overview} />
            <Grid container spacing={4}>
              {debate && debate.themes && debate.themes.map(theme => (
                <Theme key={theme.title[getCurrentLang()]} theme={theme} />
              ))}
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Main title="Latest contribution" posts={posts} />
              {debate && debate.sidebar ? (
                <Sidebar
                  description={debate.sidebar.about[getCurrentLang()]}
                  social={debate.sidebar.social}
                />
              ) : null }
            </Grid>
          </main>
        </Container>
        <Footer footer={debate.footer} />
      </>) : null }
     </div>
  );
}

export default flowRight(
  withTranslation(['common'])
)(Home);


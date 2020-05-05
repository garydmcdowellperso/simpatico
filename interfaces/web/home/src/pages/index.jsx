import React, { useEffect } from "react";
import Head from 'next/head'
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useDispatch, useSelector } from "react-redux";


import Header from "../components/Header";
import Overview from "../components/Overview";
import Theme from "../components/Theme";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import post1 from "../data/blog-post1.md";
import nextI18NextInstance from '../../i18n';
import config from '../../config';

import { fetchDebateRequest } from '../actions/debate';

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  },
}));

const posts = [post1];

const sidebar = {
  title: 'About',
  description:
    'Get involved',
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Home(props) {

  const dispatch = useDispatch();

  const debate = useSelector(state => state.debate.debate);

  useEffect(() => { // Fire once, get page and debate
    if (!debate) {
      dispatch(fetchDebateRequest(window.location.hostname));
    }
  }, []);


  const classes = useStyles();

  if (!debate) {
    return (<div/>)
  }
  console.log('debate', debate.header)

  return (
    <div>
      <Head>
        <title>{debate.slug}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {debate ? (
      <>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header selected='home' title={debate.slug} header={debate.header} />
          <main>
            <Overview data={debate.overview} />
            <Grid container spacing={4}>
              {debate.themes.map(theme => (
                <Theme key={theme.title[getCurrentLang()]} theme={theme} />
              ))}
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Main title="Latest contributon" posts={posts} />
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                social={sidebar.social}
              />
            </Grid>
          </main>
        </Container>
        <Footer title="Footer" description="Something here to give the footer a purpose!" />
      </>) : null }
     </div>
  );
}

Home.getInitialProps = async ctx => {
  if (ctx.req) {
    // Do a check if this debatee exists before trying to render (no saga here, server side)
    const res = await fetch(`${config.api.host}/v1/fetchDebate?name=${ctx.req.headers.host}`)
    const debate = await res.json()

    return debate
  }

  return  null
}
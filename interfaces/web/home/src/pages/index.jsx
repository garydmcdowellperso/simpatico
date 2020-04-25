import React from "react";
import Head from 'next/head'
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Header from "../components/Header";
import Overview from "../components/Overview";
import FeaturedPost from "../components/FeaturedPost";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import post1 from "../data/blog-post1.md";
import nextI18NextInstance from '../../i18n';

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

export default function Home(debate) {
  const classes = useStyles();

  console.log('debate', debate)
  return (
    <>
    <Head>
      <title>{debate.slug}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <body>
      <>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title={debate.slug} sections={debate.sections} />
          <main>
            <Overview data={debate.overview} />
            <Grid container spacing={4}>
              {debate.modules.map(module => (
                <FeaturedPost key={module.title[getCurrentLang()]} module={module} />
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
      </>
    </body>
    </>
  );
}

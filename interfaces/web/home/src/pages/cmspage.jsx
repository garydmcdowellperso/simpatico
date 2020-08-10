import React, { useEffect } from "react";
import Head from 'next/head'
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { HTMLRenderer } from "@react-page/renderer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { useRouter } from 'next/router'

import Footer from "../components/Footer";

import "@react-page/core/lib/index.css"; // we also want to load the stylesheets

import "@react-page/core/lib/index.css"; // we also want to load the stylesheets
// Require editor ui stylesheet
import "@react-page/ui/lib/index.css";

// Load some exemplary plugins:
import slate from "@react-page/plugins-slate"; // The rich text area plugin
import "@react-page/plugins-slate/lib/index.css"; // Stylesheets for the rich text area plugin
import background from "@react-page/plugins-background"; // A plugin for background images
import "@react-page/plugins-background/lib/index.css"; // Stylesheets for  background layout plugin
import image from "@react-page/plugins-image"; // A plugin for background images
import "@react-page/plugins-image/lib/index.css"; // Stylesheets for  background layout plugin
import video from "@react-page/plugins-video"; // A plugin for background images
import "@react-page/plugins-video/lib/index.css"; // Stylesheets for  background layout plugin
import spacer from "@react-page/plugins-spacer"; // A plugin for background images
import "@react-page/plugins-spacer/lib/index.css"; // Stylesheets for  background layout plugin

import Header from "../components/Header";
import { fetchPageRequest } from "../actions/pages";
import { fetchDebateRequest } from '../actions/debate';

import nextI18NextInstance from '../../i18n';

import config from '../../config';
import { get } from "../lib/api";

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  },
}));


const plugins = {
  content: [slate(), image, spacer, video], // Define plugins for content cells. To import multiple plugins, use [slate(), image, spacer, divider]
  layout: [background({ defaultPlugin: slate() })] // Define plugins for layout cells
};

function CMSPage(props) {
  const router = useRouter()
  const pageId = router.query.page;
  const title = router.query.title;

  const dispatch = useDispatch();

  const page = useSelector(state => state.pages.page);

  const debate = useSelector(state => state.debate.debate);

  useEffect(() => { // Fire once, get page and debate
    dispatch(fetchPageRequest(pageId));

    // Get the name part which is the sub-domain
    const subdomain = window.location.hostname.split('.')[1] ? window.location.hostname.split('.')[0] : false;

    dispatch(fetchDebateRequest(subdomain));
  }, []);

  if (!page || !debate) {
    return (<div/>)
  }

  return (
    <div>
      <Head>
        <title>{debate.url}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header selected={title} title={debate.name} header={debate.header} />
          <main>
            <HTMLRenderer 
                plugins={plugins} 
                state={page.languages[getCurrentLang()]} 
            />
          </main>
        </Container>
        <Footer selected={title} footer={debate.footer} />
      </>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  // Fetch the page contents
  const res = await fetch(`${config.api.host}/v1/fetchPage?id=${ctx.query.page}`)
  const page = await res.json()
  
  // Do a check if this debatee exists before trying to render (no saga here, server side)
  const host = ctx.req.headers.host
  const subdomain =  host.split('.')[1] ? host.split('.')[0] : false;

  const res2 = await fetch(`${config.api.host}/v1/fetchDebate?name=${subdomain}`)
  const debate = await res2.json()

  return {
    props: {
      page: page,
      debate: debate
    }
  }
}

export default CMSPage
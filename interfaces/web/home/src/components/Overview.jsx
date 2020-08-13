import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Fade from '@material-ui/core/Fade';

import nextI18NextInstance from '../../i18n';

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function Overview(props) {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  const overview = props.data;

  useEffect(() => {
    // Animations
    setVisible(true)
  }, []);

  return (
	  <Fade in={visible} style={{ transitionDelay: visible? '1000ms' : '0ms' }}>
      <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${overview.url})` }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={overview.url} alt={overview.title} />}
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {overview.title[getCurrentLang()]}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {overview.description[getCurrentLang()]}
              </Typography>
              <Link 
                href={{ pathname: 'cmspage', query: { page: overview.page } }}>
                <a>{overview.linkText[getCurrentLang()]}</a>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  );
}

Overview.propTypes = {
  post: PropTypes.object,
};

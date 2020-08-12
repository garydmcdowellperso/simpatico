import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import flowRight from 'lodash/flowRight';

import nextI18NextInstance from '../../i18n';

const useStyles = makeStyles(theme => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

const { withTranslation } = nextI18NextInstance;

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

function Sidebar(props) {
  const classes = useStyles();
  const { description, social, t } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {t('about')}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        {t('social')}
      </Typography>
      {social.map((network, idx) => (
        <Link display="block" variant="body1" href={network.url} key={idx}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              {network.name === 'github' ? <GitHubIcon /> : null}
              {network.name === 'facebook' ? <FacebookIcon /> : null}
              {network.name === 'twitter' ? <TwitterIcon /> : null}
              {network.name === 'instagram' ? <InstagramIcon /> : null}
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  description: PropTypes.string,
  social: PropTypes.array,
};

export default flowRight(
  withTranslation(['home'])
)(Sidebar);
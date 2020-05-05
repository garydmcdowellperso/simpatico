import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import { fetchModuleRequest } from "../actions/modules";

import nextI18NextInstance from '../../i18n';

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function Theme(props) {
  const classes = useStyles();
  const { theme } = props;

  const dispatch = useDispatch();

  // First time effect
  useEffect(() => {
    // Pull info from local storage if available
    if (theme && theme.module) {

      dispatch(fetchModuleRequest(theme.module));
    }
  }, [theme]);

  const { module } = useSelector(state => state.modules);

  console.log('module', module)

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={theme.url}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {theme.title[getCurrentLang()]}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {theme.description[getCurrentLang()]}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                {module && module.moduleType === 'thread' ?
                  (<Link href={'/thread/?thread=' + module.id}>
                    {theme.imageText[getCurrentLang()]}
                  </Link>) : null}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={theme.image} title={theme.imageText[getCurrentLang()]} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

Theme.propTypes = {
  post: PropTypes.object,
};

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    content: {
      "text-decoration": "none"
    }
  }));

export default function ContributionWidget(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            Latest Contributions
          </Typography>
            <>
            <Grid
              container
              direction="row"
              justify="left"
              alignItems="center"
            >
              <a href=""><Avatar alt="dummy" src="https://i.pravatar.cc" /></a>
              <Typography variant="subtitle2" gutterBottom>
                Gary -  27/01/20 11:00:00
              </Typography>
            </Grid>
            <Divider />
            <a className={classes.content}>
              <span dangerouslySetInnerHTML={{__html: "<p>Example</p>"}} />
            </a>
            </>
        </Grid>
    );
}



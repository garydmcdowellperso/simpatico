import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    "text-decoration": "none"
  }
}));

export default function Main(props) {
  let topPost = null;
  let topPostLink = "";

  const { posts, title } = props;

  if (posts.length > 0) {
    topPost = posts[posts.length-1];
    topPostLink = `/thread/?module=${topPost.module}#${topPost.id}`;
  }

  const classes = useStyles();

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {topPost ?
        (
        <>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <a href=""><Avatar alt={topPost.user} src={topPost.avatar} /></a>
          <Typography variant="subtitle2" gutterBottom>
            {topPost.user} -  {topPost.timestamp}
          </Typography>
        </Grid>
        <Divider />
        <a className={classes.content} href={topPostLink}>
          <span dangerouslySetInnerHTML={{__html: topPost.contents}} />
        </a>
        </>
        )
       : null 
      }
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};

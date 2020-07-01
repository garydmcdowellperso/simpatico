import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from "@material-ui/core/styles";
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    FacebookShareCount,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LinkedinIcon,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    TwitterIcon,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    WorkplaceShareButton
  } from "react-share";

  const useStyles = makeStyles(theme => ({
    network: {
        "verticalAlign": "top",
        "display": "inline-block",
        "margin-right": "10px",
        "textAlign": "center"
    },
    shareCount: {
        "display": "inline-flex",
        "justifyContent": "center",
        "whiteSpace": "nowrap",
        "overflow": "visible",
        "width": 0,
        "marginTop": "3px",
        "fontSize": "12px",
        "fontColor": "black"
    },
    networkShareButton: {
        cursor: "pointer"
    },
  }));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

import flowRight from 'lodash/flowRight';

import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

function Share(props) {
    const { open, handleClose, t } = props;
  
    const classes = useStyles();

    let shareUrl = '';
    if (typeof window !== 'undefined') {
        shareUrl = window.location.href;
    }
    const title = "Simpatico";

    return (
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{t('share')}</DialogTitle>
          <DialogContent>
                <div className={classes.network}>
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        className={classes.networkShareButton}
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <div>
                        <FacebookShareCount url={shareUrl} className={classes.shareCount}>
                        {count => count}
                        </FacebookShareCount>
                    </div>
                </div>
                <div className={classes.network}>
                    <FacebookMessengerShareButton
                        url={shareUrl}
                        appId="521270401588372"
                        className={classes.networkShareButton}
                    >
                        <FacebookMessengerIcon size={32} round />
                    </FacebookMessengerShareButton>
                </div>
                <div className={classes.network}>
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        className={classes.networkShareButton}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>

                    <div className={classes.shareCount}>&nbsp;</div>
                </div>
                <div className={classes.network}>
                    <LinkedinShareButton url={shareUrl} className={classes.networkShareButton}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </div>
                <div className={classes.network}>
                    <WhatsappShareButton
                        url={shareUrl}
                        title={title}
                        separator=":: "
                        className={classes.networkShareButton}
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                    <div className={classes.shareCount}>&nbsp;</div>
                </div>
                <div className={classes.network}>
                    <EmailShareButton
                        url={shareUrl}
                        subject={title}
                        body="body"
                        className={classes.networkShareButton}
                    >
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default flowRight(
    withTranslation(['common'])
)(Share);
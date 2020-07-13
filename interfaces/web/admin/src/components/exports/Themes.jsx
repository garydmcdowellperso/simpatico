import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import InputIcon from '@material-ui/icons/Input';

import { fetchAllModulesForDebateRequest } from "../../actions/modules"
import { exportPostsForModuleRequest } from "../../actions/posts";

import { 
  Button as ShardsButton,
  Col, 
  FormCheckbox,
  Modal, 
  ModalBody, 
  ModalFooter,
  ModalHeader, 
  Row 
} from "shards-react";

const getCurrentLang = () =>  'en';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));


function Theme(props) {
  const [modalOpen, setModalOpen] = useState(false)
  const [moduleTitle, setModuleTitle] = useState('')
  const [moduleType, setModuleType] = useState('')
  const [fields, setFields] = useState({
    id: false,
    title: true,
    contents: true,
    user: true,
    datetime: true,
    replies: true, 
    likes: true,
    dislikes: true,
    shares: true,
    deleted: false
  })

  const classes = useStyles();

  const { debate, theme, modules, themes, idx, handleExport } = props;

  useEffect(() => {
    modules.map((mod, idx) => {
      if (mod.id === theme.module) {
        setModuleTitle(mod.title.en)
        setModuleType(mod.moduleType)
      }
    })
  }, [theme]);

  function handleChange(e, field) {
    const updateFields = {...fields};
    updateFields[field] = !updateFields[field];
    setFields(updateFields)
  }

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.root}>
        <CardHeader
          title={debate.name}
          subheader={theme.title[getCurrentLang()]}
        />
        <CardMedia
          className={classes.media}
          image={theme.image}
          title={theme.title[getCurrentLang()]}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {moduleTitle} : {moduleType}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="export" onClick={() => {
              setModalOpen(true)
            }}>
            <InputIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Modal open={modalOpen} toggle={() => {
        setModalOpen(false)
      }} >
        <ModalHeader>Export Module Data</ModalHeader>
        <ModalBody>
          <Row form>
            <FormCheckbox
              checked={fields['id']}
              onChange={e => handleChange(e, "id")}
            >
              ID
            </FormCheckbox>
            <FormCheckbox
              checked={fields['title']}
              onChange={e => handleChange(e, "title")}
            >
              Title
            </FormCheckbox>
            <FormCheckbox
              checked={fields['contents']}
              onChange={e => handleChange(e, "contents")}
            >
              Contents
            </FormCheckbox>
            <FormCheckbox
              checked={fields['user']}
              onChange={e => handleChange(e, "user")}
            >
              User
            </FormCheckbox>
            <FormCheckbox
              checked={fields['datetime']}
              onChange={e => handleChange(e, "datetime")}
            >
              Date / Time
            </FormCheckbox>
            <FormCheckbox
              checked={fields['replies']}
              onChange={e => handleChange(e, "replies")}
            >
              Replies
            </FormCheckbox>
            <FormCheckbox
              checked={fields['deleted']}
              onChange={e => handleChange(e, "deleted")}
            >
              Deleted
            </FormCheckbox>
            <FormCheckbox
              checked={fields['likes']}
              onChange={e => handleChange(e, "likes")}
            >
              Likes
            </FormCheckbox>
            <FormCheckbox
              checked={fields['dislikes']}
              onChange={e => handleChange(e, "dislikes")}
            >
              Dislikes
            </FormCheckbox>
            <FormCheckbox
              checked={fields['shares']}
              onChange={e => handleChange(e, "shares")}
            >
              Shares
            </FormCheckbox>
          </Row>
        </ModalBody>
        <ModalFooter>
          <ShardsButton onClick={() => {
            setModalOpen(false)
            const data = {
              module: theme.module,
              fields
            }
            handleExport(data)
          }}>
            Done
          </ShardsButton>
        </ModalFooter>
      </Modal>
    </Grid>
  )
}

export default function Themes(props) {
  const [themes, setThemes] = useState([])

  const { debate } = props;

  const dispatch = useDispatch();

  useEffect(() => { // Fire once, get pages for debate
    dispatch(fetchAllModulesForDebateRequest(debate.id)); //Don't need ID
  }, []);

  useEffect(() => {
    setThemes(debate.themes);    
  }, [debate]);

  function handleExport(data) {
    dispatch(exportPostsForModuleRequest(data));
  }

  const error = useSelector(state => state.modules.error);
  const processing = useSelector(state => state.modules.processing);
  const modules = useSelector(state => state.modules.modules);

  return (
    <>
    <Row>&nbsp;</Row>
    <Row>
      <Col lg="1" md="1" sm="1" className="mb-1" />
      <Col lg="10" md="10" sm="10" className="mb-10">
        <Grid container spacing={4}>
            {themes.map((theme, idx) => (
              <Theme key={idx} handleExport={handleExport} debate={debate} themes={themes} idx={idx} theme={theme} modules={modules} />
            ))}
        </Grid>
      </Col>
    </Row>
    </>
    );
}
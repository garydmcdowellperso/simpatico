import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import BuildIcon from '@material-ui/icons/Build';
import ReactCountryFlag from "react-country-flag"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import { fetchAllModulesForDebateRequest } from "../../../actions/modules"
import { updateLandingPageThemesRequest, resetUpdating } from "../../../actions/debate";

import { 
  Button as ShardButton,
  Col, 
  FormInput, 
  FormTextarea,
  FormSelect,
  Modal, 
  ModalBody, 
  ModalHeader, 
  ModalFooter,
  Row 
} from "shards-react";

const getCurrentLang = () =>  'en';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
    minHeight: "17em"
  },
  cardMedia: {
    width: 160,
  },
});

function Theme(props) {
  const [modalOpen, setModalOpen] = useState(false)

  const [version, setVersion] = useState("english")
  const [titleEnglish, setTitleEnglish] = useState("");
  const [titleFrench, setTitleFrench] = useState("");
  const [titleSpanish, setTitleSpanish] = useState("");
  const [descriptionEnglish, setDescriptionEnglish] = useState("");
  const [descriptionFrench, setDescriptionFrench] = useState("");
  const [descriptionSpanish, setDescriptionSpanish] = useState("");
  const [linkTextEnglish, setLinkTextEnglish] = useState("");
  const [linkTextFrench, setLinkTextFrench] = useState("");
  const [linkTextSpanish, setLinkTextSpanish] = useState("");
  const [image, setImage] = useState("");
  const [module, setModule] = useState(null);
  const [moduleTitle, setModuleTitle] = useState("");

  const classes = useStyles();

  const { theme, modules, themes, idx, handleUpdate, updateChanges } = props;

  useEffect(() => { // Fire once, get pages for debate
    if (theme) {
      // Copy values to local
      setTitleEnglish(theme.title.en)
      setTitleFrench(theme.title.fr)
      setTitleSpanish(theme.title.es)
      setDescriptionEnglish(theme.description.en)
      setDescriptionFrench(theme.description.fr)
      setDescriptionSpanish(theme.description.es)
      setLinkTextEnglish(theme.imageText.en)
      setLinkTextFrench(theme.imageText.fr)
      setLinkTextSpanish(theme.imageText.es)
      setImage(theme.image)
      setModule(theme.module)

      modules.map((mod, idx) => {
        if (mod.id === theme.module) {
          setModuleTitle(mod.title.en)
        }
      })
    }
  }, [theme]);

  function deleteTheme() {
    // Update this theme
    const newThemes = [...themes];

    newThemes.splice(idx,1);

    handleUpdate(newThemes)
  }

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {theme.title[getCurrentLang()]}
              </Typography>
              <Modal open={modalOpen} toggle={() => {
                setModalOpen(false)
              }} >
                <ModalHeader>{theme.title[getCurrentLang()]}</ModalHeader>
                <ModalBody>
                  <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="title">Title</label>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-6">
                          {version === 'english' ? (
                            <FormInput
                                id="title"
                                name="title"
                                placeholder={titleEnglish}
                                value={titleEnglish}
                                onChange={(event) =>{
                                  setTitleEnglish(event.target.value);
                                }}
                            />
                          ) : null}
                          {version === 'french' ? (
                            <FormInput
                                id="title"
                                name="title"
                                placeholder={titleFrench}
                                value={titleFrench}
                                onChange={(event) =>{
                                  setTitleFrench(event.target.value);
                                }}
                            />
                          ) : null}
                          {version === 'spanish' ? (
                            <FormInput
                                id="title"
                                name="title"
                                placeholder={titleSpanish}
                                value={titleSpanish}
                                onChange={(event) =>{
                                  setTitleSpanish(event.target.value);
                                }}
                            />
                          ) : null}
                        </Col>
                    </Row>                      
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="description">Description</label>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-6">
                          {version === 'english' ? (
                            <FormTextarea
                                id="descripton"
                                name="descripton"
                                placeholder={descriptionEnglish}
                                value={descriptionEnglish}
                                onChange={(event) => {
                                  setDescriptionEnglish(event.target.value);
                                }}
                            />
                          ) : null}
                          {version === 'french' ? (
                            <FormTextarea
                                id="descripton"
                                name="descripton"
                                placeholder={descriptionFrench}
                                value={descriptionFrench}
                                onChange={(event) => {
                                  setDescriptionFrench(event.target.value);
                                }}
                            />
                          ) : null}
                          {version === 'spanish' ? (
                            <FormTextarea
                                id="descripton"
                                name="descripton"
                                placeholder={descriptionSpanish}
                                value={descriptionSpanish}
                                onChange={(event) => {
                                  setDescriptionSpanish(event.target.value);
                                }}
                            />
                          ) : null}
                        </Col>
                    </Row>    
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="linktext">Link Text</label>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-6">
                          {version === 'english' ? (
                            <FormInput
                                id="linktext"
                                name="linktext"
                                placeholder={linkTextEnglish}
                                value={linkTextEnglish}
                                onChange={(event) => {
                                  setLinkTextEnglish(event.target.value);
                                }}
                            />
                          ) : null}
                          {version === 'french' ? (
                            <FormInput
                                id="linktext"
                                name="linktext"
                                placeholder={linkTextFrench}
                                value={linkTextFrench}
                                onChange={(event) => {
                                  setLinkTextFrench(event.target.value);
                                }}
                            />
                          ) : null}
                          {version === 'spanish' ? (
                            <FormInput
                                id="linktext"
                                name="linktext"
                                placeholder={linkTextSpanish}
                                value={linkTextSpanish}
                                onChange={(event) => {
                                  setLinkTextSpanish(event.target.value);
                                }}
                            />
                          ) : null}
                        </Col>
                    </Row>    
                    <Row form>
                      <Col lg="3" md="3" sm="3" className="mb-3">
                          <label htmlFor="image">Image</label>
                      </Col>
                      <Col lg="6" md="6" sm="6" className="mb-6">
                          <FormInput
                              id="image"
                              name="image"
                              placeholder={image}
                              value={image}
                              onChange={(event) => {
                                setImage(event.target.value);
                              }}
                          />
                      </Col>
                    </Row>  
                    {modules ? (   
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="module">Module</label>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-6">
                            <FormSelect 
                                id="module"
                                name="module"
                                onChange={(event) =>{
                                  console.log('here', event.target.value)
                                  setModule(parseInt(event.target.value, 10));

                                  if (event.target.value !== "-1") {
                                    modules.map((mdl, idx) => {
                                      if (mdl.id === parseInt(event.target.value, 10)) {
                                        setModuleTitle(mdl.title)
                                      }
                                    })
                                  }
                                  if (event.target.value === "-1") {
                                    setModuleTitle("Module")
                                  }
                                }}>
                            >
                            <option key="-1" id="empty" name="empty" value="-1"> </option> 

                            {modules.map((mdl, idx2) => {
                                if (mdl.id === module) {
                                    return (<option selected key={idx2} id={mdl.name} name={mdl.name} value={mdl.id}>{mdl.name}</option>)
                                }
                                return (<option key={idx2} id={mdl.namee} name={mdl.name} value={mdl.id}>{mdl.name}</option>)
                            })}
                            </FormSelect>
                        </Col>
                    </Row>) :null }                                        
                    <Row form>
                        <ShardButton type="button" onClick={() => {
                            setModalOpen(false)
                            // Push to the top
                            const newThemes = [...themes];

                            // Update this index
                            newThemes[idx] = {
                                "title" : {
                                    "en" : titleEnglish,
                                    "fr" : titleFrench,
                                    "es" : titleSpanish
                                },
                                "description" : {
                                    "en" : descriptionEnglish,
                                    "fr" : descriptionFrench,
                                    "es" : descriptionSpanish
                                },
                                "imageText" : {
                                    "en" : linkTextEnglish,
                                    "fr" : linkTextFrench,
                                    "es" : linkTextSpanish
                                },
                                image,
                                module
                            };

                            console.log('newThemes', newThemes)
                            handleUpdate(newThemes)

                            updateChanges()
                        }}>Done</ShardButton>
                    </Row>
                </ModalBody>
                <ModalFooter>
                  <Row>
                    <Col lg="1" md="1" sm="1" className="mb-1">
                    {version === 'english' ? 
                      (<ReactCountryFlag 
                        style={{
                            fontSize: '2em',
                            lineHeight: '2em',
                        }}
                        countryCode="GB" svg 
                        onClick={()=> {
                            setVersion('english')
                        }}
                      />) : 
                      (<ReactCountryFlag 
                        countryCode="GB" svg 
                        onClick={()=> {
                            setVersion('english')
                        }}
                        />
                      )
                    }
                    </Col>
                    <Col lg="1" md="1" sm="1" className="mb-1">
                    {version === 'french' ? 
                      (<ReactCountryFlag 
                        style={{
                            fontSize: '2em',
                            lineHeight: '2em',
                        }}
                        countryCode="FR" svg 
                        onClick={()=> {
                            setVersion('french')
                        }}
                      />) : 
                      (<ReactCountryFlag 
                        countryCode="FR" svg 
                        onClick={()=> {
                            setVersion('french')
                        }}
                      />)
                      }
                    </Col>
                    <Col lg="1" md="1" sm="1" className="mb-1">
                    {version === 'spanish' ? 
                        (<ReactCountryFlag 
                        style={{
                            fontSize: '2em',
                            lineHeight: '2em',
                        }}
                        countryCode="ES" svg 
                        onClick={()=> {
                            setVersion('spanish')
                        }}
                        />) :                     
                      (<ReactCountryFlag 
                        countryCode="ES" svg 
                        onClick={()=> {
                            setVersion('spanish')
                        }}
                      />)
                      }
                    </Col>
                  </Row>
                </ModalFooter>
              </Modal>
              <Typography variant="subtitle1" paragraph>
                {theme.description[getCurrentLang()]}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                {linkTextEnglish}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                  {moduleTitle ? moduleTitle : ""}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="configure">
                <BuildIcon onClick={() => {
                    setModalOpen(true)
                  }} />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteIcon onClick={() => {
                  deleteTheme()

                  updateChanges()
                }} />
              </IconButton>
            </CardActions>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={image} title={linkTextEnglish} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

function NewTheme(props) {
  const [modalOpen, setModalOpen] = useState(false)

  const [version, setVersion] = useState("english")
  const [titleEnglish, setTitleEnglish] = useState("");
  const [titleFrench, setTitleFrench] = useState("");
  const [titleSpanish, setTitleSpanish] = useState("");
  const [descriptionEnglish, setDescriptionEnglish] = useState("");
  const [descriptionFrench, setDescriptionFrench] = useState("");
  const [descriptionSpanish, setDescriptionSpanish] = useState("");
  const [linkTextEnglish, setLinkTextEnglish] = useState("");
  const [linkTextFrench, setLinkTextFrench] = useState("");
  const [linkTextSpanish, setLinkTextSpanish] = useState("");
  const [image, setImage] = useState("");
  const [module, setModule] = useState("");

  const classes = useStyles();

  const { modules, themes, handleUpdate, updateChanges } = props;

  console.log('modules', modules)

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                New Theme
              </Typography>
              <Modal open={modalOpen} toggle={() => {
                setModalOpen(false)
              }} >
                <ModalHeader>New Theme</ModalHeader>
                <ModalBody>
                  <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="title">Title</label>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-6">
                          {version === 'english' ? (
                            <FormInput
                                id="title"
                                name="title"
                                placeholder={titleEnglish}
                                value={titleEnglish}
                                onChange={(event) =>{
                                  setTitleEnglish(event.target.value);
                                }}
                            />
                          ) : null}
                          {version === 'french' ? (
                            <FormInput
                                id="title"
                                name="title"
                                placeholder={titleFrench}
                                value={titleFrench}
                                onChange={(event) =>{
                                  setTitleFrench(event.target.value);
                                }}
                            />
                          ) : null}
                          {version === 'spanish' ? (
                            <FormInput
                                id="title"
                                name="title"
                                placeholder={titleSpanish}
                                value={titleSpanish}
                                onChange={(event) =>{
                                  setTitleSpanish(event.target.value);
                                }}
                            />
                          ) : null}
                        </Col>
                    </Row>                      
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="description">Description</label>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-6">
                          {version === 'english' ? (
                            <FormTextarea
                                id="descripton"
                                name="descripton"
                                placeholder={descriptionEnglish}
                                value={descriptionEnglish}
                                onChange={(event) => {
                                  setDescriptionEnglish(event.target.value);
                                }}
                            />
                          ) : null}
                          {version === 'french' ? (
                            <FormTextarea
                                id="descripton"
                                name="descripton"
                                placeholder={descriptionFrench}
                                value={descriptionFrench}
                                onChange={(event) => {
                                  setDescriptionFrench(event.target.value);
                                }}
                            />
                          ) : null}
                          {version === 'spanish' ? (
                            <FormTextarea
                                id="descripton"
                                name="descripton"
                                placeholder={descriptionSpanish}
                                value={descriptionSpanish}
                                onChange={(event) => {
                                  setDescriptionSpanish(event.target.value);
                                }}
                            />
                          ) : null}
                        </Col>
                    </Row>    
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="linktext">Link Text</label>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-6">
                          {version === 'english' ? (
                            <FormInput
                                id="linktext"
                                name="linktext"
                                placeholder={linkTextEnglish}
                                value={linkTextEnglish}
                                onChange={(event) => {
                                  setLinkTextEnglish(event.target.value);
                                }}
                            />
                          ) : null}
                          {version === 'french' ? (
                            <FormInput
                                id="linktext"
                                name="linktext"
                                placeholder={linkTextFrench}
                                value={linkTextFrench}
                                onChange={(event) => {
                                  setLinkTextFrench(event.target.value);
                                }}
                            />
                          ) : null}
                          {version === 'spanish' ? (
                            <FormInput
                                id="linktext"
                                name="linktext"
                                placeholder={linkTextSpanish}
                                value={linkTextSpanish}
                                onChange={(event) => {
                                  setLinkTextSpanish(event.target.value);
                                }}
                            />
                          ) : null}
                        </Col>
                    </Row>    
                    <Row form>
                      <Col lg="3" md="3" sm="3" className="mb-3">
                          <label htmlFor="image">Image</label>
                      </Col>
                      <Col lg="6" md="6" sm="6" className="mb-6">
                          <FormInput
                              id="image"
                              name="image"
                              placeholder={image}
                              value={image}
                              onChange={(event) => {
                                setImage(event.target.value);
                              }}
                          />
                      </Col>
                    </Row>  
                    {modules ? (   
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="module">Module</label>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-6">
                            <FormSelect 
                                id="module"
                                name="module"
                                onChange={(event) =>{
                                    setModule(event.target.value);
                                }}>
                            >
                            <option key="-1" id="empty" name="empty" value="" />

                            {modules.map((module, idx2) => {
                                if (module.id === module) {
                                    return (<option selected key={idx2} id={module.name} name={module.name} value={module.id}>{module.name}</option>)
                                }
                                return (<option key={idx2} id={module.name} name={module.name} value={module.id}>{module.name}</option>)
                            })}
                            </FormSelect>
                        </Col>
                    </Row>) :null }                                        
                    <Row form>
                        <ShardButton type="button" onClick={() => {
                            setModalOpen(false)
                            // Push to the top
                            const newThemes = [...themes];

                            newThemes.unshift({
                                "title" : {
                                    "en" : titleEnglish,
                                    "fr" : titleFrench,
                                    "es" : titleSpanish
                                },
                                "description" : {
                                    "en" : descriptionEnglish,
                                    "fr" : descriptionFrench,
                                    "es" : descriptionSpanish
                                },
                                "imageText" : {
                                    "en" : linkTextEnglish,
                                    "fr" : linkTextFrench,
                                    "es" : linkTextSpanish
                                },
                                "image" : image,
                                "module" : module
                            })
                            handleUpdate(newThemes)
                            updateChanges()
                        }}>Done</ShardButton>
                    </Row>
                </ModalBody>
                <ModalFooter>
                  <Row>
                    <Col lg="1" md="1" sm="1" className="mb-1">
                    {version === 'english' ? 
                      (<ReactCountryFlag 
                        style={{
                            fontSize: '2em',
                            lineHeight: '2em',
                        }}
                        countryCode="GB" svg 
                        onClick={()=> {
                            setVersion('english')
                        }}
                      />) : 
                      (<ReactCountryFlag 
                        countryCode="GB" svg 
                        onClick={()=> {
                            setVersion('english')
                        }}
                        />
                      )
                    }
                    </Col>
                    <Col lg="1" md="1" sm="1" className="mb-1">
                    {version === 'french' ? 
                      (<ReactCountryFlag 
                        style={{
                            fontSize: '2em',
                            lineHeight: '2em',
                        }}
                        countryCode="FR" svg 
                        onClick={()=> {
                            setVersion('french')
                        }}
                      />) : 
                      (<ReactCountryFlag 
                        countryCode="FR" svg 
                        onClick={()=> {
                            setVersion('french')
                        }}
                      />)
                      }
                    </Col>
                    <Col lg="1" md="1" sm="1" className="mb-1">
                    {version === 'spanish' ? 
                        (<ReactCountryFlag 
                        style={{
                            fontSize: '2em',
                            lineHeight: '2em',
                        }}
                        countryCode="ES" svg 
                        onClick={()=> {
                            setVersion('spanish')
                        }}
                        />) :                     
                      (<ReactCountryFlag 
                        countryCode="ES" svg 
                        onClick={()=> {
                            setVersion('spanish')
                        }}
                      />)
                      }
                    </Col>
                  </Row>
                </ModalFooter>
              </Modal>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <BuildIcon onClick={() => {
                  setModalOpen(true)
                }} />
              </IconButton>
            </CardActions>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default function Themes(props) {
  const [themes, setThemes] = useState([])
  const [changes, setChanges] = useState(0)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const { debate } = props;

  const dispatch = useDispatch();

  useEffect(() => { // Fire once, get pages for debate
    dispatch(fetchAllModulesForDebateRequest(debate.id)); //Don't need ID
    dispatch(resetUpdating());
  }, []);

  function handleUpdate(themes) {
    setThemes(themes);    
  }

  function updateChanges() {
    setChanges(changes + 1);    
  }

  useEffect(() => {
    setThemes(debate.themes);    
  }, [debate]);

  useEffect(() => {
    if (updating === false) {
      setChanges(0);    
      dispatch(resetUpdating());
    }
  }, [updating]);
  
  const { error, updating, modules } = useSelector(state => state.modules);

  return (
    <>
    {error || True? (
    <Dialog
        fullScreen={fullScreen}
        TransitionComponent={Transition}
        open={true}
        onClose={() => {
          dispatch(resetError());
        }}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"An error has occured"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We're very sorry but an unexpected error has occured, our geeks have been notified and will get right on  this
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Hmmph, Ok
          </Button>
        </DialogActions>
    </Dialog>) : null}
    <Row>
      <Col lg="1" md="1" sm="1" className="mb-1" />
      <Col lg="10" md="10" sm="10" className="mb-10">
        <Grid container spacing={4}>
            <NewTheme themes={themes} handleUpdate={handleUpdate} modules={modules} updateChanges={updateChanges} />
            {themes.map((theme, idx) => (
              <Theme key={idx} themes={themes} idx={idx} theme={theme} modules={modules} handleUpdate={handleUpdate} updateChanges={updateChanges} />
            ))}
        </Grid>
      </Col>
    </Row>
    <Row />
      <Col lg="1" md="1" sm="1" className="mb-1" />
    <Row>
        <Col lg="1" md="1" sm="1" className="mb-1" />
        <Col lg="3" md="3" sm="3" className="mb-3">
            {  changes > 0 ? (
            <ShardButton 
              onClick={() => {
                dispatch(updateLandingPageThemesRequest(debate.id, themes));
              }}
              >Update Themes ({changes})</ShardButton>) : null }
        </Col>
    </Row>
    </>
  );
}

Themes.propTypes = {
  post: PropTypes.object,
};

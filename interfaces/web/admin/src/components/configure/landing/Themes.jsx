import React, { useCallback, useEffect, useState } from 'react';
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
import classNames from "classnames";

import { fetchAllModulesRequest } from "../../../actions/modules"
import { updateLandingPageThemesRequest } from "../../../actions/debate";

import { 
  Button as ShardButton,
  Col, 
  FormGroup, 
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
  const [titleOpen, setTitleOpen] = useState(false)
  const [descriptionOpen, setDescriptionOpen] = useState(false)
  const [linkTextOpen, setLinkTextOpen] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)
  const [moduleOpen, setModuleOpen] = useState(false)

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

  const { theme, modules, themes, idx, handleUpdate } = props;

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
          setModuleTitle(mod.title)
        }
      })
    }
  }, [theme]);

  function updateTheme() {
    // Update this theme
    const newThemes = [...themes];

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
      "image" : image,
      "module" : module
    };
    handleUpdate(newThemes)
  }

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
                <i class="material-icons" onClick={() => {
                  setTitleOpen(true)
                }}>build</i>
              </Typography>
              <Modal open={titleOpen} toggle={() => {
                setTitleOpen(false)
              }} >
                <ModalHeader>{titleEnglish}</ModalHeader>
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
                        <ShardButton type="button" onClick={() => {
                            setTitleOpen(false)
                            updateTheme()
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
                <i class="material-icons" onClick={() => {
                  setDescriptionOpen(true)
                }}>build</i>
              </Typography>
              <Modal open={descriptionOpen} toggle={() => {
                setDescriptionOpen(false)
              }} >
                <ModalHeader>{descriptionEnglish}</ModalHeader>
                <ModalBody>
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
                        <ShardButton type="button" primary onClick={() => {
                            setDescriptionOpen(false)

                            updateTheme()
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
              <Typography variant="subtitle1" color="primary">
                {linkTextEnglish}
                <i class="material-icons" onClick={() => {
                  setLinkTextOpen(true)
                }}>build</i>
              </Typography>
              <Modal open={linkTextOpen} toggle={() => {
                setLinkTextOpen(false)
              }} >
              <ModalHeader>{linkTextEnglish}</ModalHeader>
                <ModalBody>
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
                        <ShardButton type="button" primary onClick={() => {
                            setLinkTextOpen(false)

                            updateTheme()
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
            {module ? (
            <Typography variant="subtitle1" color="primary">
                {moduleTitle ? moduleTitle : ""}
                <i class="material-icons" onClick={() => {
                  setModuleOpen(true)
                }}>build</i>
            </Typography> ) : null}
            <Modal open={moduleOpen} toggle={() => {
                setModuleOpen(false)
              }} >
                <ModalHeader>Module</ModalHeader>
                <ModalBody>
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
                                      console.log('here1', event.target.value)
                                      modules.map((mod, idx) => {
                                        if (mod.id === parseInt(event.target.value, 10)) {
                                          setModuleTitle(mod.title)
                                        }
                                      })
                                    }
                                    if (event.target.value === "-1") {
                                      setModuleTitle("Module")
                                    }
                                }}>
                            >
                            <option key="-1" id="empty" name="empty" value="-1"> </option> 

                            {modules.map((mod, idx2) => {
                                if (mod.id === module) {
                                    return (<option selected key={idx2} id={mod.title} name={mod.title} value={mod.id}>{mod.title}</option>)
                                }
                                return (<option key={idx2} id={mod.title} name={mod.title} value={mod.id}>{mod.title}</option>)
                            })}
                            </FormSelect>
                        </Col>
                    </Row>                                       
                    <Row form>
                        <ShardButton type="button" primary onClick={() => {
                            setModuleOpen(false)

                            updateTheme()
                        }}>Done</ShardButton>
                    </Row>
                </ModalBody>
              </Modal>
            </CardContent>
            <CardActions>
              <IconButton aria-label="configure">
                <BuildIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteIcon onClick={() => {
                  deleteTheme()
                }} />
              </IconButton>
            </CardActions>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={image} title={linkTextEnglish} />
              <i class="material-icons" onClick={() => {
                    setImageOpen(true)
              }}>build</i>
          </Hidden>
          <Modal open={imageOpen} toggle={() => {
            setImageOpen(false)
          }} >
            <ModalHeader>{image}</ModalHeader>
            <ModalBody>
                <Row form>
                    <Col lg="3" md="3" sm="3" className="mb-3">
                        <label htmlFor="image">Image</label>
                    </Col>
                    <Col lg="8" md="8" sm="8" className="mb-8">
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
                <Row form>
                    <ShardButton type="button" primary onClick={() => {
                        setImageOpen(false)
                        
                        updateTheme()
                    }}>Done</ShardButton>
                </Row>
            </ModalBody>
          </Modal>
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

  const valueClasses = classNames(
    "stats-small__value",
    "count",
    "my-3"
  );
    
  const dataFieldClasses = classNames(
    "stats-small__data",
    "text-center"
  );

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
                                    return (<option selected key={idx2} id={module.title} name={module.title} value={module.id}>{module.title}</option>)
                                }
                                return (<option key={idx2} id={module.title} name={module.title} value={module.id}>{module.title}</option>)
                            })}
                            </FormSelect>
                        </Col>
                    </Row>) :null }                                        
                    <Row form>
                        <ShardButton type="button" primary onClick={() => {
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

  const { debate } = props;

  console.log('debate', debate)
  
  const dispatch = useDispatch();

  useEffect(() => { // Fire once, get pages for debate
    dispatch(fetchAllModulesRequest(debate.id)); //Don't need ID
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


  const error = useSelector(state => state.modules.error);
  const processing = useSelector(state => state.modules.processing);
  const modules = useSelector(state => state.modules.modules);

  return (
    <>
    <Row>
      <Col lg="1" md="1" sm="1" className="mb-1" />
      <Col lg="10" md="10" sm="10" className="mb-10">
        <Grid container spacing={4}>
            <NewTheme themes={themes} handleUpdate={handleUpdate} modules={modules} updateChanges={updateChanges} />
            {themes.map((theme, idx) => (
              <Theme key={idx} themes={themes} idx={idx} theme={theme} modules={modules} handleUpdate={handleUpdate} />
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
              >Update Modules ({changes})</ShardButton>) : null }
        </Col>
        <Col lg="3" md="3" sm="3" className="mb-3">
          {  changes > 0 ? (
            <ShardButton 
              theme="danger"
              onClick={() => {
                setChanges(0)
              }}
              >Undo updates</ShardButton>) : null }
        </Col>
    </Row>
    </>
  );
}

Themes.propTypes = {
  post: PropTypes.object,
};

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ReactCountryFlag from "react-country-flag"

import { updateLandingPageOverviewRequest } from "../../../actions/debate";

import { 
  Button as ShardButton,
  Col, 
  FormInput, 
  FormGroup,
  Modal, 
  ModalBody, 
  ModalHeader, 
  ModalFooter,
  Row 
} from "shards-react";

const getCurrentLang = () => 'en';

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
  const [titleOpen, setTitleOpen] = useState(false)
  const [descriptionOpen, setDescriptionOpen] = useState(false)
  const [linkTextOpen, setLinkTextOpen] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)

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

  const classes = useStyles();

  const dispatch = useDispatch();

  console.log('props', props)
  const debate = props.debate;

  console.log('debate', debate)

  function handleOpenTitle () {
    setTitleOpen(true)
  }

  function handleCloseTitle () {
    setTitleOpen(false)
  }

  function handleOpenDescription () {
    setDescriptionOpen(true)
  }

  function handleCloseDescription () {
    setDescriptionOpen(false)
  }

  function handleOpenLinkText () {
    setLinkTextOpen(true)
  }

  function handleCloseLinkText () {
    setLinkTextOpen(false)
  }

  function handleOpenImage () {
    setImageOpen(true)
  }

  function handleCloseImage () {
    setImageOpen(false)
  }

  useEffect(() => { // Fire once, get pages for debate
    if (debate && debate.overview) {
      // Copy values to local
      setTitleEnglish(debate.overview.title.en)
      setTitleFrench(debate.overview.title.fr)
      setTitleSpanish(debate.overview.title.es)
      setDescriptionEnglish(debate.overview.description.en)
      setDescriptionFrench(debate.overview.description.fr)
      setDescriptionSpanish(debate.overview.description.es)
      setLinkTextEnglish(debate.overview.linkText.en)
      setLinkTextFrench(debate.overview.linkText.fr)
      setLinkTextSpanish(debate.overview.linkText.es)
      setImage(debate.overview.url)
    }
  }, [debate]);


  return (
    <>
    <Paper 
      className={classes.mainFeaturedPost} 
      style={{ backgroundImage: `url(${image})` }}
      >
      {/* Increase the priority of the hero background image */}
      {<img 
        style={{ display: 'none' }} 
        src={image} 
        alt={debate.overview.title[getCurrentLang()]} 
      />}
      <Modal open={imageOpen} toggle={() => {
        handleCloseImage()
       }} >
        <ModalHeader>{image}</ModalHeader>
        <ModalBody>
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
            <Row form>
                <ShardButton type="button" primary onClick={() => {
                    handleCloseImage()
                }}>Done</ShardButton>
            </Row>
        </ModalBody>
    </Modal>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <i class="material-icons" onClick={() => {
            handleOpenImage()
          }}>build</i>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {titleEnglish}
              <i class="material-icons" onClick={() => {
               handleOpenTitle()
              }}>build</i>
            </Typography>
            <Modal open={titleOpen} toggle={() => {
                handleCloseTitle()
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
                        <ShardButton type="button" primary onClick={() => {
                            handleCloseTitle()
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
            <Typography variant="h5" color="inherit" paragraph>
              {debate.overview.description[getCurrentLang()]}
              <i class="material-icons" onClick={() => {
               handleOpenDescription()
              }}>build</i>
            </Typography>
            <Modal open={descriptionOpen} toggle={() => {
                handleCloseDescription()
            }} >
                <ModalHeader>{descriptionEnglish}</ModalHeader>
                <ModalBody>
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="description">Description</label>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-6">
                          {version === 'english' ? (
                            <FormInput
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
                            <FormInput
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
                            <FormInput
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
                            handleCloseDescription()
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
            <Link variant="subtitle1">
              {debate.overview.linkText[getCurrentLang()]}
              <i class="material-icons" onClick={() => {
               handleOpenLinkText()
              }}>build</i>
            </Link>
            <Modal open={linkTextOpen} toggle={() => {
                handleCloseLinkText()
            }} >
                <ModalHeader>{linkTextEnglish}</ModalHeader>
                <ModalBody>
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="title">Link Text</label>
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
                            handleCloseLinkText()
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
          </div>
        </Grid>
      </Grid>
    </Paper>
    <Row>
      <FormGroup>
        <Row form>
          <Col lg="2" md="2" sm="2" className="mb-2" />
          <Col lg="3" md="3" sm="3" className="mb-3">
              <ShardButton 
                type="button"
                onClick={() => {
                    // Create the header object
                    const overview = {
                      title: {
                        en: titleEnglish,
                        fr: titleFrench,
                        es: titleSpanish
                      },
                      description: {
                        en: descriptionEnglish,
                        fr: descriptionFrench,
                        es: descriptionSpanish
                      },
                      linkText: {
                        en: linkTextEnglish,
                        fr: linkTextFrench,
                        es: linkTextSpanish
                      },
                      url: image
                    };
                  dispatch(updateLandingPageOverviewRequest(debate.id, overview));
                }}
                >Update Overview</ShardButton>
          </Col>
        </Row>
      </FormGroup>
    </Row>
    </>
);
}

Overview.propTypes = {
  post: PropTypes.object,
};

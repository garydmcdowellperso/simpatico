import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import ReactCountryFlag from "react-country-flag"
import classNames from "classnames";

import { updateLandingPageModulesRequest } from "../../../actions/debate";

import { 
  Button as ShardButton,
  Col, 
  FormGroup, 
  FormInput, 
  FormTextarea,
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
  },
  cardMedia: {
    width: 160,
  },
});

function Module(props) {
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

  const { module } = props;

  useEffect(() => { // Fire once, get pages for debate
    if (module) {
      // Copy values to local
      setTitleEnglish(module.title.en)
      setTitleFrench(module.title.fr)
      setTitleSpanish(module.title.es)
      setDescriptionEnglish(module.description.en)
      setDescriptionFrench(module.description.fr)
      setDescriptionSpanish(module.description.es)
      setLinkTextEnglish(module.imageText.en)
      setLinkTextFrench(module.imageText.fr)
      setLinkTextSpanish(module.imageText.es)
      setImage(module.url)
    }
  }, [module]);


  console.log('module', module)

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {module.title[getCurrentLang()]}
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
                        <ShardButton type="button" primary onClick={() => {
                            setTitleOpen(false)
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
                {module.description[getCurrentLang()]}
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
                            setDescriptionOpen(false)
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
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={module.image} title={module.imageText[getCurrentLang()]} />
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
                        setImageOpen(false)
                    }}>Done</ShardButton>
                </Row>
            </ModalBody>
          </Modal>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

function NewModule(props) {

  const classes = useStyles();

  const { module } = props;

  console.log('module', module)

  const valueClasses = classNames(
    "stats-small__value",
    "count",
    "my-3"
  );
    
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <h6 className={valueClasses}>+</h6>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia}  />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default function Modules(props) {
  const { debate } = props;

  console.log('debate', debate)
  
  const dispatch = useDispatch();

  return (
    <>
    <Row>
      <Grid container spacing={4}>
          <NewModule />
          {debate.modules.map((module, idx) => (
            <Module key={module-idx} module={module} />
          ))}
      </Grid>
    </Row>
    <Row>
      <FormGroup>
        <Row form>
          <Col lg="2" md="2" sm="2" className="mb-2" />
          <Col lg="3" md="3" sm="3" className="mb-3">
              <ShardButton 
                type="button"
                onClick={() => {
                  const modules = {

                  };

                  dispatch(updateLandingPageModulesRequest(debate.id, modules));
                }}
                >Update Modules</ShardButton>
          </Col>
        </Row>
      </FormGroup>
    </Row>
    </>
  );
}

Modules.propTypes = {
  post: PropTypes.object,
};

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ReactCountryFlag from "react-country-flag"
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from '@material-ui/icons/Instagram';

import { updateLandingPageSidebarRequest } from "../../../actions/debate";

import { 
  Button as ShardButton,
  Col, 
  FormInput, 
  FormGroup,
  FormSelect,
  Modal, 
  ModalBody, 
  ModalHeader, 
  ModalFooter,
  Row 
} from "shards-react";

const getCurrentLang = () => 'en';

const useStyles = makeStyles(theme => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

export default function Sidebar(props) {
  const [modalOpen, setModalOpen] = useState(false)

  const [version, setVersion] = useState("english")
  const [aboutEnglish, setAboutEnglish] = useState("");
  const [aboutFrench, setAboutFrench] = useState("");
  const [aboutSpanish, setAboutSpanish] = useState("");
  const [social1, setSocial1] = useState(null);
  const [social2, setSocial2] = useState(null);
  const [social3, setSocial3] = useState(null);
  const [social, setSocial] = useState([]);
  const [url1, setURL1] = useState("");
  const [url2, setURL2] = useState("");
  const [url3, setURL3] = useState("");

  const classes = useStyles();

  const dispatch = useDispatch();

  const debate = props.debate;

  useEffect(() => { // Fire once, get pages for debate
    if (debate && debate.sidebar) {
      // Copy values to local
      setAboutEnglish(debate.sidebar.about.en)
      setAboutFrench(debate.sidebar.about.fr)
      setAboutSpanish(debate.sidebar.about.es)

      if (debate.sidebar.social && debate.sidebar.social.length > 0) {
        setSocial1(debate.sidebar.social[0])
        setSocial2(debate.sidebar.social[1])
        setSocial3(debate.sidebar.social[2])
        setSocial(debate.sidebar.social)
      }
    }
  }, [debate]);

  const error = useSelector(state => state.pages.error);
  const processing = useSelector(state => state.pages.processing);
  const pages = useSelector(state => state.pages.pages);

  const networks = [
    {
      id: 0,
      name: 'github',
      url: 'https://github.com/garydmcdowellperso/simpatico'
    },
    {
      id: 1,
      name: 'facebook',
      url: 'https://www.facebook.com/garydmcdowell'
    },
    {
      id: 2,
      name: 'twitter',
      url: 'https://twitter/garydmcdowell'
    },
    {
      id: 3,
      name: 'instagram',
      url: 'https://www.instagram.com/garydmcdowell/'
    }
  ]

  return (
    <>
    <Grid item xs={12} md={9} lg={9}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
        <Typography>{aboutEnglish}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network, idx) => (
        <a key={network.name+idx}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              {network.name === 'github' ? (<GitHubIcon />) : null}
              {network.name === 'twitter' ? (<TwitterIcon />) : null}
              {network.name === 'facebook' ? (<FacebookIcon />) : null}
              {network.name === 'instagram' ? (<InstagramIcon />) : null}
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </a>
      ))}
      <Typography variant="h5" color="inherit" paragraph>
        <i className="material-icons" onClick={() => {
          setModalOpen(true)
          }}>build</i>
      </Typography>
      <Modal open={modalOpen} toggle={() => {
          setModalOpen(false)
      }} >
        <ModalHeader>Overview</ModalHeader>
          <ModalBody>
              <Row form>
                  <Col lg="3" md="3" sm="3" className="mb-3">
                    <label htmlFor="about">About</label>
                  </Col>
                  <Col lg="6" md="6" sm="6" className="mb-6">
                    {version === 'english' ? (
                      <FormInput
                          id="about"
                          name="about"
                          placeholder={aboutEnglish}
                          value={aboutEnglish}
                          onChange={(event) =>{
                            setAboutEnglish(event.target.value);
                          }}
                      />
                    ) : null}
                    {version === 'french' ? (
                      <FormInput
                          id="about"
                          name="about"
                          placeholder={aboutFrench}
                          value={aboutFrench}
                          onChange={(event) =>{
                            setAboutFrench(event.target.value);
                          }}
                      />
                    ) : null}
                    {version === 'spanish' ? (
                      <FormInput
                          id="about"
                          name="about"
                          placeholder={aboutSpanish}
                          value={aboutSpanish}
                          onChange={(event) =>{
                            setAboutSpanish(event.target.value);
                          }}
                      />
                    ) : null}
                  </Col>
              </Row>    
              <Row form>
                <Col lg="3" md="3" sm="3" className="mb-3">
                    <label htmlFor="social">Social</label>
                </Col>
              </Row>    
              {social.map((network, idx) => (
                <Row form>
                  <Col lg="1" md="1" sm="1" className="mb-1">
                    {network.name === 'github' ? (<GitHubIcon />) : null}
                    {network.name === 'facebook' ? (<FacebookIcon />) : null}
                    {network.name === 'twitter' ? (<TwitterIcon />) : null}
                    {network.name === 'instagram' ? (<InstagramIcon />) : null}
                  </Col>
                  <Col lg="5" md="5" sm="5" className="mb-5">
                    <FormSelect 
                        id={"social"+idx}
                        name={"social"+idx}
                        onChange={(event) =>{
                          let newSocial = {}
                          if (event.target.value !== "-1") {                          
                            newSocial = {
                              name: event.target.value === "0" ? 'github' : event.target.value === "1" ? 'facebook' : event.target.value === "2" ? 'twitter' : event.target.value === "3" ? 'instagram' : '',
                              url: ''                              
                            }
                          }

                          const newSocials = [...social]
                          newSocials[idx] = newSocial

                          setSocial(newSocials);

                        }}>
                    >
                    <option key="-1" id="empty" name="empty" value="-1"> </option> 

                    {networks.map((mdl, idx2) => {
                        if (mdl.name === network.name) {
                            return (<option selected key={idx2} id={mdl.name} name={mdl.name} value={mdl.id}>{mdl.name}</option>)
                        }
                        return (<option key={idx2} id={mdl.name} name={mdl.name} value={mdl.id}>{mdl.name}</option>)
                    })}
                    </FormSelect>
                  </Col>
                  <Col lg="6" md="6" sm="6" className="mb-6">
                    <FormInput
                        id={"socialurl"+idx}
                        name={"socialurl"+idx}
                        placeholder={network.name === 'github' ? networks[0].url : network.name === 'facebook' ? networks[1].url : network.name === 'twitter' ? networks[2].url : network.name === 'instagram' ? networks[3].url : "url"}
                        value={network.url}
                        onChange={(event) =>{
                          const newSocial = {
                              name: network.name,
                              url: event.target.value                             
                            }

                          const newSocials = [...social]
                          newSocials[idx] = newSocial

                          setSocial(newSocials);
                        }}
                    />
                  </Col>
                </Row>    
              ))}
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
    </Grid>
    <Row>
      <FormGroup>
        <Row form>
          <Col lg="2" md="2" sm="2" className="mb-2" />
          <Col lg="3" md="3" sm="3" className="mb-3">
              <ShardButton 
                type="button"
                onClick={() => {
                    // Create the header object
                    const sidebar = {
                      about: {
                        en: aboutEnglish,
                        fr: aboutFrench,
                        es: aboutSpanish
                      },
                      social
                    };
                  dispatch(updateLandingPageSidebarRequest(debate.id, sidebar));
                }}
                >Update Sidebar</ShardButton>
          </Col>
        </Row>
      </FormGroup>
    </Row>
    </>
);
}

Sidebar.propTypes = {
  post: PropTypes.object,
};

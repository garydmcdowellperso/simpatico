import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import ReactCountryFlag from "react-country-flag"

import { fetchAllPagesRequest } from "../../../actions/pages"
import { updateLandingPageHeaderRequest } from "../../../actions/debate";

import { 
    Button as ShardButton,
    Col, 
    FormGroup,
    FormInput, 
    FormSelect, 
    Modal, 
    ModalBody, 
    ModalFooter, 
    ModalHeader, 
    Row 
} from "shards-react";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-around",
    width: "80%",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

export default function Header(props) {
    const [share, setShare] = useState(true)
    const [version, setVersion] = useState("english")
    const [placeHolderOpen, setPlaceHolderOpen] = useState([
        false, false, false, false
    ])
    const [placeHolderNameEnglish, setPlaceHolderNameEnglish] = useState([
        "", "", "", ""
    ])
    const [placeHolderNameFrench, setPlaceHolderNameFrench] = useState([
        "", "", "", ""
    ])
    const [placeHolderNameSpanish, setPlaceHolderNameSpanish] = useState([
        "", "", "", ""
    ])
    const [placeHolderPage, setPlaceHolderPage] = useState([
        null, null, null, null
    ])
    const [sections, setSections] = useState([
        {
            title: 'placeholder1'
        },
        {
            title: 'placeholder2'
        },
        {
            title: 'placeholder3'
        },
        {
            title: 'placeholder4'
        }    
    ])

    const classes = useStyles();
    const { title, debate } = props;

    const dispatch = useDispatch();

    function handleOpen (idx) {
        console.log('idx', idx)
        const placeHolderOpenNew =[...placeHolderOpen];
        placeHolderOpenNew[idx] = true;

        setPlaceHolderOpen(placeHolderOpenNew)
    }

    function handleClose (idx) {
        console.log('idx', idx)
        const placeHolderOpenNew =[...placeHolderOpen];
        placeHolderOpenNew[idx] = false;

        setPlaceHolderOpen(placeHolderOpenNew)
    }
    
    const error = useSelector(state => state.pages.error);
    const processing = useSelector(state => state.pages.processing);
    const pages = useSelector(state => state.pages.pages);

    useEffect(() => { // Fire once, get pages for debate
        if (debate) {
            dispatch(fetchAllPagesRequest());

            const newPlaceHolderPage = [];
            const newPlaceHolderNameEnglish = [];
            const newPlaceHolderNameFrench = [];
            const newPlaceHolderNameSpanish = [];

            setShare(debate.header.share);
            if (debate.header.sections) {
                debate.header.sections.map((section, idx) => {
                    if (section.page && section.page !== 0) {
                        newPlaceHolderPage[idx] = section.page;
                    }
                    if (section.languages) {
                        newPlaceHolderNameEnglish[idx] = section.languages['en'];
                        newPlaceHolderNameFrench[idx] = section.languages['fr'];
                        newPlaceHolderNameSpanish[idx] = section.languages['es'];
                    }
                })
                setPlaceHolderPage(newPlaceHolderPage);
                setPlaceHolderNameEnglish(newPlaceHolderNameEnglish);
                setPlaceHolderNameFrench(newPlaceHolderNameFrench);
                setPlaceHolderNameSpanish(newPlaceHolderNameSpanish);
            }
        }
    }, [debate]);
    
    return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button size="small" onClick={()=> {
            setShare(!share)
        }}>
        {share ? ("Share (Enabled)") : ("Share (Disabled)") }
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button
            variant="outlined"
            size="small"
        >
        {`Sign up / Sign in`}
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section, idx) => (
            <>
            <Typography
                key={idx}
                component="h2"
                variant="body2"
                color="inherit"
                align="center"
                noWrap
                onClick={() => {
                    handleOpen(idx)
                }}
                className={classes.toolbarLink}
            >
                {placeHolderNameEnglish[idx] !== "" ? placeHolderNameEnglish[idx] : sections[idx].title }
            </Typography>
            <Modal open={placeHolderOpen[idx]} toggle={() => {
                handleClose(idx)
            }} >
                <ModalHeader>{section.title}</ModalHeader>
                <ModalBody>
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="name">Name</label>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-6">
                        {version === 'english' ?
                            (<FormInput
                                id="name"
                                name="name"
                                placeholder={section.title}
                                value={placeHolderNameEnglish[idx] || section.title}
                                onChange={(event) =>{
                                    const placeHolderNameNew =[...placeHolderNameEnglish];

                                    placeHolderNameNew[idx] = event.target.value;
                                    setPlaceHolderNameEnglish(placeHolderNameNew);
                                }}
                            />) : null}
                        {version === 'french' ?
                            (<FormInput
                                id="name"
                                name="name"
                                placeholder={section.title}
                                value={placeHolderNameFrench[idx] || section.title}
                                onChange={(event) =>{
                                    const placeHolderNameNew =[...placeHolderNameFrench];

                                    placeHolderNameNew[idx] = event.target.value;
                                    setPlaceHolderNameFrench(placeHolderNameNew);
                                }}
                            />) : null}
                        {version === 'spanish' ?
                            (<FormInput
                                id="name"
                                name="name"
                                placeholder={section.title}
                                value={placeHolderNameSpanish[idx] || section.title}
                                onChange={(event) =>{
                                    const placeHolderNameNew =[...placeHolderNameSpanish];

                                    placeHolderNameNew[idx] = event.target.value;
                                    setPlaceHolderNameSpanish(placeHolderNameNew);
                                }}
                            />) : null}
                        </Col>
                    </Row>    
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="page">Page</label>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-6">
                            <FormSelect 
                                id="page"
                                name="page"
                                onChange={(event) =>{
                                    const placeHolderPageNew =[...placeHolderPage];

                                    placeHolderPageNew[idx] = event.target.value;
                                    setPlaceHolderPage(placeHolderPageNew);
                                }}>
                            >
                            <option key="-1" id="empty" name="empty" value="" />

                            {pages.map((page, idx2) => {
                                if (page.id === placeHolderPage[idx]) {
                                    return (<option selected key={idx2} id={page.name} name={page.name} value={page.id}>{page.name}</option>)
                                }
                                return (<option key={idx2} id={page.name} name={page.name} value={page.id}>{page.name}</option>)
                            })}
                            </FormSelect>
                        </Col>
                    </Row>    
                    <Row form>
                        <ShardButton type="button" primary onClick={() => {
                            handleClose(idx)
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
            </>
        ))}
      </Toolbar>
      <Row>
          <FormGroup>
            <Row form>
              <Col lg="2" md="2" sm="2" className="mb-2" />
              <Col lg="3" md="3" sm="3" className="mb-3">
                  <ShardButton 
                    type="button"
                    onClick={() => {
                        // Create the header object
                        const header = {
                            share,
                            sections: [
                                {
                                    page: placeHolderPage[0],
                                    languages: {
                                        'en': placeHolderNameEnglish[0],
                                        'fr': placeHolderNameFrench[0],
                                        'es': placeHolderNameSpanish[0]
                                    }        
                                },
                                {
                                    page: placeHolderPage[1],
                                    languages: {
                                        'en': placeHolderNameEnglish[1],
                                        'fr': placeHolderNameFrench[1],
                                        'es': placeHolderNameSpanish[1]
                                    }        
                                },
                                {
                                    page: placeHolderPage[2],
                                    languages: {
                                        'en': placeHolderNameEnglish[2],
                                        'fr': placeHolderNameFrench[2],
                                        'es': placeHolderNameSpanish[2]
                                    }        
                                },
                                {
                                    page: placeHolderPage[3],
                                    languages: {
                                        'en': placeHolderNameEnglish[3],
                                        'fr': placeHolderNameFrench[3],
                                        'es': placeHolderNameSpanish[3]
                                    }        
                                }
                            ]
                        };
                      dispatch(updateLandingPageHeaderRequest(debate.id, header));
                    }}
                    >Update Header</ShardButton>
              </Col>
            </Row>
          </FormGroup>
        </Row>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};

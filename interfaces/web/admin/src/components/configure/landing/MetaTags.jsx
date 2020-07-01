import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import { 
    Button as ShardButton,
    Col, 
    FormInput, 
    FormSelect, 
    Modal, 
    ModalBody, 
    ModalFooter, 
    ModalHeader, 
    Row 
} from "shards-react";

import { updateLandingPageMetaTagsRequest } from "../../../actions/debate";

function MetaTags(props) {
    const { debate, handleClose, open } = props;

    const [metaTags, setMetaTags] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => { // Fire once, get pages for debate
        if (debate && debate.metaTags) {
            setMetaTags(debate.metaTags);
        }
    }, [debate]);

    return  (
        <Modal open={open} toggle={() => {
            handleClose()
        }} >
            <ModalHeader>Meta Tags</ModalHeader>
            <ModalBody size="lg">
                {metaTags.map((tag, idx) => {
                    console.log('tag', tag)
                    return (
                        <>
                        <Row key={`row-${idx}`} form>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <label htmlFor={`type-${idx}`}>Type</label>
                            </Col>
                            <Col lg="3" md="3" sm="3" className="mb-3">
                                <FormSelect 
                                    id={`type-${idx}`}
                                    name={`type-${idx}`}
                                    defaultValue={tag.type === 'property' ? 'property' : 'name'}
                                    onChange={(event) =>{
                                        const newMetaTags = [...metaTags];

                                        newMetaTags[idx].type = event.target.value;
                                        setMetaTags(newMetaTags);

                                    }}>
                                    <option key={`property-${idx}`} id={`property-${idx}`} name={`property-${idx}`} value="property">property</option>

                                    <option key={`name-${idx}`} id={`name-${idx}`} name={`name-${idx}`} value="name">name</option>
                                })}
                                </FormSelect>
                            </Col>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <label htmlFor={`typevalue-${idx}`}> Type Value</label>
                            </Col>
                            <Col lg="4" md="4" sm="4" className="mb-4">
                                <FormInput
                                    id={`typevalue-${idx}`}
                                    name={`typevalue-${idx}`}
                                    placeholder="value"
                                    value={tag.typevalue}
                                    onChange={(event) =>{
                                        const newMetaTags = [...metaTags];

                                        newMetaTags[idx].typevalue = event.target.value;
                                        setMetaTags(newMetaTags);
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row key={`row2-${idx}`} form>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <label htmlFor={`content-${idx}`}>Content</label>
                            </Col>
                            <Col lg="9" md="9" sm="9" className="mb-9">
                                <FormInput
                                    id={`content-${idx}`}
                                    name={`content-${idx}`}
                                    placeholder="content"
                                    value={tag.content}
                                    onChange={(event) =>{
                                        const newMetaTags = [...metaTags];

                                        newMetaTags[idx].content = event.target.value;
                                        setMetaTags(newMetaTags);
                                    }}
                                />
                            </Col>
                            <Col lg="1" md="1" sm="1" className="mb-1">
                                <IconButton 
                                    aria-label="delete" 
                                    color="secondary" 
                                    size="small"
                                    onClick={(idx) => {
                                        const newMetaTags = [...metaTags];

                                        newMetaTags.splice(idx, 1);
                                        setMetaTags(newMetaTags);
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Col>
                        </Row>
                        </>
                    )
                })}
                <IconButton 
                    aria-label="add" 
                    color="primary" 
                    size="small"
                    onClick={() => {
                        const newMetaTags = [...metaTags];

                        newMetaTags.push({
                            type: 'property',
                            typevalue: '',
                            content: ''
                        })
                        setMetaTags(newMetaTags);
                    }}
                >
                    <AddIcon />
                </IconButton>
            </ModalBody>
            <ModalFooter>
                <ShardButton type="button" onClick={() => {
                    handleClose()

                    console.log('metaTags', metaTags)
                    // Update the landing page
                    dispatch(updateLandingPageMetaTagsRequest(debate.id, metaTags));
                }}>Done</ShardButton>
            </ModalFooter>
        </Modal>
    )
}

export default MetaTags;

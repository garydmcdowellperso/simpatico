import React, { useEffect, useState } from "react";
import { 
  Button as ShardButton, 
  Col, 
  Row 
} from "shards-react";
import { useDispatch, useSelector } from "react-redux";

import Themes from "./exports/Themes";

import { fetchDebatesRequest } from "../actions/debate";

function Exports(props) {  
  const dispatch = useDispatch()

  const error = useSelector(state => state.debate.error);
  const processing = useSelector(state => state.debate.processing);
  const { debates } = useSelector(state => state.debate);

  useEffect(() => { // Fire once, get pages for debate
    if (debates && debates.length === 0) {
      dispatch(fetchDebatesRequest(localStorage.getItem("accountId")));
    }
  }, []);

  return (
    debates.map((debate, idx) => {
      return (
        <Row key={debate.id}>
          <Col lg="12" md="12" sm="12" className="mb-3">
            <Themes debate={debate} />
          </Col>
        </Row>  
      )          
    })
  )
}

export default Exports;
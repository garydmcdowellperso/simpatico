import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardHeader, CardBody, CardFooter } from "shards-react";
import { Button, Icon } from 'semantic-ui-react'
import Link from 'next/link'

import { fetchAllPagesRequest } from "../../../actions/pages"

function Pages(props) {
  const { debate } = props;

  const error = useSelector(state => state.pages.error);
  const processing = useSelector(state => state.pages.processing);
  const pages = useSelector(state => state.pages.pages);

  const dispatch = useDispatch();

  useEffect(() => { // Fire once, get pages for debate
    if (debate) {
      dispatch(fetchAllPagesRequest(debate.id));
    }
  }, [debate]);

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Pages</h6>
      </CardHeader>
      <CardBody className="p-0 pb-3">
          <table className="table mb-0">
            <thead className="bg-light">
              <tr>
                <th scope="col" className="border-0">
                  
                </th>
                <th scope="col" className="border-0">
                  Name
                </th>
                <th scope="col" className="border-0">
                  Type
                </th>
                <th scope="col" className="border-0">
                  In Use
                </th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page, idx) => {
                console.log('page', page)
                return (
                  <tr key={idx}>
                      <Link href={{ pathname: '/admin/newpage', query: { debateName: debate ? debate.name : '', id: page ? page.id : '', mode: 'update' } }}><td><i class="material-icons">build</i></td></Link>
                      <td>{page.name}</td>
                      <td>{page.type}</td>
                      <td>{page.inuse ? "Yes" : "No"}</td>
                  </tr> )
              })}
              </tbody>
          </table>
        </CardBody>
        <CardFooter>
            <Button icon labelPosition='left'>
              <Icon name='pause' />
                <Link href={{ pathname: '/admin/newpage', query: { debateName: debate ? debate.name : '', id: debate ? debate.id : '', mode: 'new' } }}>
                  Add
                </Link>
            </Button>
          </CardFooter>
      </Card>
  );
}

export default Pages;

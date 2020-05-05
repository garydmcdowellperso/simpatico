import React, { useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "shards-react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon } from 'semantic-ui-react'
import Link from 'next/link'

import { fetchAllModulesForDebateRequest } from "../../../actions/modules"

function Modules(props) {
  const { debate } = props;

  const error = useSelector(state => state.modules.error);
  const processing = useSelector(state => state.modules.processing);
  const modules = useSelector(state => state.modules.modules);

  const dispatch = useDispatch();

  useEffect(() => { // Fire once, get pages for debate
    if (debate) {
      dispatch(fetchAllModulesForDebateRequest(debate.id));
    }
  }, [debate]);

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Modules</h6>
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
                <th scope="col" className="border-0">
                  Posts
                </th>
                <th scope="col" className="border-0">
                  Contributions
                </th>
                <th scope="col" className="border-0">
                  Participants
                </th>
              </tr>
            </thead>
            <tbody>
              {modules.map((module, idx) => {
                return (
                <tr key={idx}>
                  <td>
                    <Link href={{ pathname: '/admin/newmodule', query: { debateName: debate ? debate.name : '', id: module ? module.id : '', mode: 'update' } }}><a><i class="material-icons">build</i></a></Link>
                    <a onClick={(idx) => {
                      console.log('delete')
                    }}>
                      <i class="material-icons" style={{color:'red'}}>delete</i>
                    </a>
                  </td>
                  <td>{module.name}</td>
                  <td>{module.moduleType}</td>
                  <td>{!module.inuse ? 'No' : 'Yes'}</td>
                  <td>{module.posts}</td>
                  <td>{module.contributions}</td>
                  <td>{module.participants}</td>
                </tr>)
              })}
              </tbody>
          </table>
        </CardBody>
        <CardFooter>
            <Button icon labelPosition='left'>
              <i class="material-icons">add</i>
              <Link href={{ pathname: '/admin/newmodule', query: { debateName: debate ? debate.name : '', id: debate ? debate.id : '', mode: 'new' } }}>
                <a>Add</a>
              </Link>
            </Button>
          </CardFooter>
      </Card>
  );
}

export default Modules;

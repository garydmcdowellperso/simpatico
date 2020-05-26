import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "shards-react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'semantic-ui-react'
import Link from 'next/link'

import { fetchUsersRequest } from "../actions/users";
import { fetchDebatesRequest } from "../actions/debate";
import Confirm from './common/Confirm'

function Users(props) {
  const [openDelete, setOpenDelete] = useState(false);
  const [userId, setUserId] = useState(null);

  const error = useSelector(state => state.modules.error);
  const processing = useSelector(state => state.modules.processing);
  const dispatch = useDispatch();

  const users = useSelector(state => state.users.users);
  const debates = useSelector(state => state.debate.debates);

  function toggleDelete() {
    setOpenDelete(!openDelete)
  }

  function deleteUser() {
    console.log('delete user', userId)
    //dispatch(deletUserRequest(userId));
  }

  useEffect(() => { // Fire once, get users for account
    dispatch(fetchUsersRequest(localStorage.getItem("accountId")));

    dispatch(fetchDebatesRequest(localStorage.getItem("accountId")));
  }, []);

  return (
    <>
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Users</h6>
      </CardHeader>
      <CardBody className="p-0 pb-3">
          <table className="table mb-0">
            <thead className="bg-light">
              <tr>
                <th scope="col" className="border-0">
                </th>
                <th scope="col" className="border-0">
                  First Name
                </th>
                <th scope="col" className="border-0">
                  Last Name
                </th>
                <th scope="col" className="border-0">
                  Email
                </th>
                <th scope="col" className="border-0">
                  Role
                </th>
                <th scope="col" className="border-0">
                  Activated
                </th>
                {debates ?
                  debates.map((debate, idx) => {
                    return (
                    <th scope="col" className="border-0">
                      {debate.name}
                    </th>    
                    )
                  }) : null
                }
              </tr>
            </thead>
            <tbody>
            {users ?
              users.map((user, idx) => {
                return (
                  <tr key={idx}>
                    <td>
                        <i 
                          className="material-icons" 
                          style={{color:'red'}}
                          onClick={() => {
                            setUserId(user.id)
                            setOpenDelete(true)
                          }}
                        >
                            delete
                        </i>
                        <Link href={{ pathname: '/admin/profile', query: { userId: user.id }}} >
                          <a>
                            <i className="material-icons">build</i>
                          </a>
                        </Link>
                    </td>
                    <td>{user['first-name']}</td>
                    <td>{user['last-name']}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.activated ? 'True' : 'False'}</td>
                    <td>
                    {debates ?
                      debates.map((debate, idx) => {
                        if (user.debates.includes(debate.id)) {
                          return (
                            'True'
                          )    
                        }
                      }) : null
                    }
                    </td>
                  </tr>)
              }) : null }              
            </tbody>
          </table>
        </CardBody>
        <CardFooter>
            <Button icon labelPosition='left'>
              <i className="material-icons">add</i>
              <Link href="/">
                <a>Add</a>
              </Link>
            </Button>
          </CardFooter>
      </Card>
      <Confirm open={openDelete} toggle={toggleDelete} action={deleteUser} />
      </>
  );
}

export default Users;
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "shards-react";
import { Button, Icon } from 'semantic-ui-react'
import Link from 'next/link'

class Modules extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
                    #
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
                  <tr>
                    <td>1</td>
                    <td>Thread</td>
                    <td>Yes</td>
                    <td>12</td>
                    <td>5</td>
                    <td>17</td>
                  </tr>
                </tbody>
            </table>
          </CardBody>
          <CardFooter>
              <Button icon labelPosition='left'>
                <Icon name='pause' />
                  Add
              </Button>
            </CardFooter>
        </Card>
    );
  }
}

export default Modules;

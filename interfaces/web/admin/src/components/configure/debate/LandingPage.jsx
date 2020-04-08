import React from "react";
import { Card, CardImg, CardHeader } from "shards-react";
import Link from 'next/link'

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link href="/">
        <Card small className="h-100">
            <CardHeader className="border-bottom">
            <h6 className="m-0">Landing Page</h6>
            </CardHeader>
            <CardImg top src={require('../../../images/lp.png')} />
        </Card>
      </Link>
    );
  }
}

export default LandingPage;

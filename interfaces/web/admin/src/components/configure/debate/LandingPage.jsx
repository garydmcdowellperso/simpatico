import React from "react";
import { Card, CardImg, CardHeader } from "shards-react";
import Link from 'next/link'

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { debate } = this.props;

    return (
      <Link href={{ pathname: '/admin/landing', query: { slug: debate ? debate.slug : '', name: debate ? debate.name : '' } }}>
        <Card small className="h-100">
            <CardHeader className="border-bottom">
            <h6 className="m-0">Landing Page <i class="material-icons">build</i></h6>
            
            </CardHeader>
            <CardImg top src={require('../../../images/lp.png')} />
        </Card>
      </Link>
    );
  }
}

export default LandingPage;

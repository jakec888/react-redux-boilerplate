import React, {Component} from 'react';
import {Navbar, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Link to="/" className="navbar-dark navbar-brand">
            React with Redux Boilerplate
          </Link>
        </Navbar>
        <Card className="card">
          <Card.Body>{this.props.children}</Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  sample: state.Sample.sample,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

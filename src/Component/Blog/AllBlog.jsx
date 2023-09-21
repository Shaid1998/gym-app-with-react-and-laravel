import React, { Component, Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

class AllBlog extends Component {
  render() {
    return (
      <Fragment>
        <div className='Blog'>
          <Card className='CardMain'>
            <Row className='TopRow'>
              <Col className='TopCol1' lg={6} sm={6} md={6}>
                <img className='AdminImage' src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1695280051~exp=1695280651~hmac=043c54105936ee716c49709f129f168f979cd85ab82266d0dc8bdf9ed2b16ae7" />
              </Col>
              <Col className='TopCol1' lg={6} sm={6} md={6}>
                <Row className='MidRow1'>
                    <h1>Admin</h1>
                </Row>
                <Row className='MidRow2'>
                  <Col className='MidCol1' lg={4} sm={4} md={4}>
                    <h6>Date</h6>
                  </Col>
                  <Col className='MidCol2' lg={4} sm={4} md={4}>
                    <h1>.</h1>
                  </Col>
                  <Col className='MidCol3' lg={4} sm={4} md={4}>
                    <h6>time</h6>
                  </Col>
                </Row>
              </Col>
            </Row>
            
            <Card.Body>
              <Card.Title>Accelerate Your Recovery with Cryo Therapy at FITNESS nGO in Port Saint Lucie</Card.Title>
              <Card.Text>Welcome to FITNESS nGO, where we believe that a well-rounded fitness routine includes not only challenging workouts but also effective...</Card.Text>
            </Card.Body>
            <Row>
              <Col lg={6} sm={6} md={6}>
                <Row>
                  <Col lg={6} sm={6} md={6}>
                    <h1>Views</h1>
                  </Col>
                  <Col lg={6} sm={6} md={6}>
                    <h1>Times Count</h1>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} sm={6} md={6}>
                <h1>Reaction</h1>
              </Col>
            </Row>
          </Card>
        </div>
      </Fragment>
    )
  }
}

export default AllBlog
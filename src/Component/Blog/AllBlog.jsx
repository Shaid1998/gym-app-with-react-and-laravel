import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                    <h1 className='AdminName'>Zona Labs</h1>
                    <a className='DateSome'>Post Date: September 21   <span className='DotSp'>.</span> <span className='TimeSp'>Posting Time: 2:16 PM</span></a>
                </Row>
              </Col>
            </Row>
            <Row className='MiDRow'>
              <div className='MidDiv'>
                <h4 className='BlogTitle'>Accelerate Your Recovery with Cryo Therapy at FITNESS nGO in Port Saint Lucie</h4>
                <p className='BlogSubTitle'>Welcome to FITNESS nGO, where we believe that a well-rounded fitness routine includes not only challenging workouts but also effective...</p>
              </div>
              <hr />
            </Row>
            <Row className='LastRow'>
              <Col className='LastCol1' lg={6} sm={6} md={6}>
                <Row className='LastMidRow'>
                  <Col className='LastMidCol1' lg={6} sm={6} md={6}>
                    <h1 className='ViewCountClass'>Total Views: 42 <span>times</span></h1>
                  </Col>
                  <Col className='LastMidCol2' lg={6} sm={6} md={6}>
                    <h1 className='CommentsCountClass'>Total Comments: 0 <span>times</span></h1>
                  </Col>
                </Row>
              </Col>
              <Col className='LastMidCol3' lg={6} sm={6} md={6}>
                <h1 className='ReactionClass'>Reaction</h1>
              </Col>
            </Row>
          </Card>
        </div>
      </Fragment>
    )
  }
}

export default AllBlog
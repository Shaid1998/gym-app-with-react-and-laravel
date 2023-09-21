import {RiHeart3Fill} from 'react-icons/ri';
import React, { Component, Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import BlogImg from '../../Assets/Image/CustomerService/blog.jpg'

class AllBlog extends Component {
  render() {
    return (
      <Fragment>
        <div className='Blog'>
          <Row>
            <Card className='CardMain'>
              <Row className='TopRow'>
                <Col className='TopCol1' lg={6} sm={6} md={6}>
                  <img className='AdminImage' src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1695280051~exp=1695280651~hmac=043c54105936ee716c49709f129f168f979cd85ab82266d0dc8bdf9ed2b16ae7" />
                </Col>
                <Col className='TopCol1' lg={6} sm={6} md={6}>
                  <Row className='MidRow1'>
                      <h1 className='AdminName'>Zona Labs</h1>
                      <a className='DateSome'>Post Date: September 21   <span className='DotSp'>.</span> Posting Time: 2:16 PM</a>
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
                      <h1 className='ViewCountClass'>Total Views: 42 times</h1>
                    </Col>
                    <Col className='LastMidCol2' lg={6} sm={6} md={6}>
                      <h1 className='CommentsCountClass'>Total Comments: 0 times</h1>
                    </Col>
                  </Row>
                </Col>
                <Col className='LastMidCol3' lg={6} sm={6} md={6}>
                  <div>
                    <h1 className='ReactionClass'>2 <RiHeart3Fill className="heart"/></h1>
                  </div>
                </Col>
              </Row>
            </Card>
          </Row>
          <Row>
            <Card className='CardMain'>
              <Row className='TopRow'>
                <Col className='TopCol1' lg={6} sm={6} md={6}>
                  <img className='AdminImage' src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1695280051~exp=1695280651~hmac=043c54105936ee716c49709f129f168f979cd85ab82266d0dc8bdf9ed2b16ae7" />
                </Col>
                <Col className='TopCol1' lg={6} sm={6} md={6}>
                  <Row className='MidRow1'>
                      <h1 className='AdminName'>Zona Labs</h1>
                      <a className='DateSome'>Post Date: September 21   <span className='DotSp'>.</span> Posting Time: 2:16 PM</a>
                  </Row>
                </Col>
              </Row>
              <Row className='MiDRow'>
                <div className='MidDiv'>
                  <h4 className='BlogTitle'>Embrace the Chill: Cryotherapy at Our Gym Sets Us Apart as Pioneers in Port Saint Lucie</h4>
                  <p className='BlogSubTitle'>In the realm of fitness and wellness, new trends and technologies emerge, promising enhanced performance, faster recovery, and improved...</p>
                </div>
                <hr />
              </Row>
              <Row className='LastRow'>
                <Col className='LastCol1' lg={6} sm={6} md={6}>
                  <Row className='LastMidRow'>
                    <Col className='LastMidCol1' lg={6} sm={6} md={6}>
                      <h1 className='ViewCountClass'>Total Views: 36 times</h1>
                    </Col>
                    <Col className='LastMidCol2' lg={6} sm={6} md={6}>
                      <h1 className='CommentsCountClass'>Total Comments: 0 times</h1>
                    </Col>
                  </Row>
                </Col>
                <Col className='LastMidCol3' lg={6} sm={6} md={6}>
                  <div>
                    <h1 className='ReactionClass'>2 <RiHeart3Fill className="heart"/></h1>
                  </div>
                </Col>
              </Row>
            </Card>
          </Row>
          <Row>
            <Col className='LastImgCol' lg={6} sm={6} md={6}>
              <img className='ImgBlog' src={BlogImg} />
            </Col>
            <Col className='LastTextCol' lg={6} sm={6} md={6}>
              <Card className='CardMain'>
                <Row className='TopRow'>
                  <Col className='TopCol1' lg={6} sm={6} md={6}>
                    <img className='AdminImage' src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1695280051~exp=1695280651~hmac=043c54105936ee716c49709f129f168f979cd85ab82266d0dc8bdf9ed2b16ae7" />
                  </Col>
                  <Col className='TopCol1' lg={6} sm={6} md={6}>
                    <Row className='MidRow1'>
                        <h1 className='AdminName'>Zona Labs</h1>
                        <a className='DateSome'>Post Date: September 21   <span className='DotSp'>.</span> Posting Time: 2:16 PM</a>
                    </Row>
                  </Col>
                </Row>
                <Row className='MiDRow'>
                  <div className='MidDiv'>
                    <h4 className='BlogTitle'>Fitness nGo: The Ultimate Fitness Destination in Port Saint Lucie</h4>
                    <p className='BlogSubTitle'>In the heart of Port Saint Lucie, there's a new fitness center that has taken the town by storm - Fitness nGo. With its impressive array...</p>
                  </div>
                  <hr />
                </Row>
                <Row className='LastRow'>
                  <Col className='LastCol1' lg={6} sm={6} md={6}>
                    <Row className='LastMidRow'>
                      <Col className='LastMidCol1' lg={6} sm={6} md={6}>
                        <h1 className='ViewCountClass'>Total Views: 87 times</h1>
                      </Col>
                      <Col className='LastMidCol2' lg={6} sm={6} md={6}>
                        <h1 className='CommentsCountClass'>Total Comments: 0 times</h1>
                      </Col>
                    </Row>
                  </Col>
                  <Col className='LastMidCol3' lg={6} sm={6} md={6}>
                    <div>
                      <h1 className='ReactionClass'>2 <RiHeart3Fill className="heart"/></h1>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          
          
        </div>
      </Fragment>
    )
  }
}

export default AllBlog
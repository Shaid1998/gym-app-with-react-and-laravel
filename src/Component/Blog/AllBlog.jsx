import {RiHeart3Fill} from 'react-icons/ri';
import React, { Component, Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import BlogImg from '../../Assets/Image/CustomerService/blog.jpg'
import { Badge } from 'flowbite-react'
import { HiCheck } from 'react-icons/hi'
import BaseUrl from '../../BaseUrl/BaseUrl';
import RestClient from '../../BaseUrl/RestClient';

class AllBlog extends Component {
  constructor(){
    super();
    this.state={
      BlogData:[]
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllBlogDataShow).then(result=>{
      this.setState({BlogData:result});
    }).catch(error=>{
      this.setState({blog_short_title:'???',blog_short_description:'???',blog_long_title:'???',blog_details:'???',blog_image:'???',blog_total_comments:'???',blog_total_view:'???'})
    })
  }
  render() {
    const MyList = this.state.BlogData;
        const MyView = MyList.map(MyList=>{
            return <Row>
                    <a href='/view-blog-details' className='AllLink'>
                      <Card className='CardMain'>
                        <Row className='TopRow'>
                          <Col className='TopCol1' lg={6} sm={6} md={6}>
                            <img className='AdminImage' src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1695280051~exp=1695280651~hmac=043c54105936ee716c49709f129f168f979cd85ab82266d0dc8bdf9ed2b16ae7" />
                          </Col>
                          <Col className='TopCol1' lg={6} sm={6} md={6}>
                            <Row className='MidRow1'>
                                <h1 className='AdminName'>Zona Labs<Badge icon={HiCheck} /></h1>
                                <a className='DateSome'>Post Date: {MyList.created_at}   <span className='DotSp'>.</span> Posting Time: 2:16 PM</a>
                            </Row>
                          </Col>
                        </Row>
                        <Row className='MiDRow'>
                          <div className='MidDiv'>
                            <h4 className='BlogTitle'>{MyList.blog_short_title}</h4>
                            <p className='BlogSubTitle'>{MyList.blog_short_description}</p>
                          </div>
                          <hr />
                        </Row>
                        <Row className='LastRow'>
                          <Col className='LastCol1' lg={6} sm={6} md={6}>
                            <Row className='LastMidRow'>
                              <Col className='LastMidCol1' lg={6} sm={6} md={6}>
                                <h1 className='ViewCountClass'>Total Views: {MyList.blog_total_view}</h1>
                              </Col>
                              <Col className='LastMidCol2' lg={6} sm={6} md={6}>
                                <h1 className='CommentsCountClass'>Total Comments: {MyList.blog_total_comments}</h1>
                              </Col>
                            </Row>
                          </Col>
                          <Col className='LastMidCol3' lg={6} sm={6} md={6}>
                            <div>
                              <h1 className='ReactionClass'>{MyList.blog_reaction} <RiHeart3Fill className="heart"/></h1>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </a>
                  </Row>
        })
    return (
      <Fragment>
        <div className='Blog'>
          
          {MyView}
          
        </div>
      </Fragment>
    )
  }
}

export default AllBlog
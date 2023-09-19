import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import PersonalTImg from '../../Assets/Image/Careers/Trainer.jpg'

class PersonalTrainingCareer extends Component {
  render() {
    return (
      <Fragment>
        <div className='PersonalTrainingCareer'>
          <Row className='PersonalCarRoW'>
            <Col className='PersonalCarCol1' lg={6} md={6} sm={6}>
              <div>
                <img className='PersonalCarImg'  src={PersonalTImg} />
              </div>
            </Col>
            <Col className='PersonalCarCol2' lg={6} md={6} sm={6}>
              <div className='PerCarT'>
                  <h1 className='PerCarTitile'>PERSONAL TRAINING</h1>
              </div>
              <div className='PersonalCarDescription'>
                  <p className='PerCarDes'>We offer multiple ways to impact the lives of our members.</p>
                  <p className='PerCarDes'>Positions include: Sales Managers; Certified Trainers; Nutrition Advisors</p>
                  <p className='PerCarDes'>Certified Trainers have a passion for fitness and helping others achieve their fitness goals.  Whether you are an experienced and certified trainer, or just a fitness junky that wants to become a trainer, we are the best place for your career.   All of our trainers enjoy respectable earning potential, full benefits, and continued skills development. If you are not certified already, that is just fine by us.  If we hire you, we will pay for your certifications.   Earning Potential:  $30k to $50k annually</p>
                  <p className='PerCarDes'>Nutrition Advisors help our members and clients improve their eating to reach their goals and improve overall health.  Earning Potential: $30k to $60k annually</p>
                  <p className='PerCarDes'>Trainer Sales Managers focus primarily on meeting with as many members to demonstrate the value of our Certified Trainers.  They find the right program at the right budget for the client then pair them with the right trainer.  Earning Potential: $45k to $75k annually</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default PersonalTrainingCareer
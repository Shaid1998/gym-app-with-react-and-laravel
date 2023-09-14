import React, { Component, Fragment } from 'react'
import { Form } from 'react-bootstrap'
import Brand from '../../Assets/Image/Brand.jpg'

class Registration extends Component {
  render() {
    return (
      <Fragment>
        <div className='reg-popup'>
            <div className='box'>
                <div className='form'>
                    <img className='brandImage' src={Brand} />
                    <h1 className='FormTitle1'>JOIN NOW!</h1>
                    <h1 className='FormTitle'>FIRST MONTH FREE!</h1>
                    <h4 className='FormSubTitle'>SPECIAL OFFER ends September 16th!</h4>
                    <h6 className='FormMiniSubTitle'>Fill Out Form to Schedule Your Appointment to Join!</h6>
                    <h6 className='FormMiniSubTitle2'>You Also One Day Guest Pass To Try Us Out!</h6>
                    <Form className='FormM'>
                        <div className='form-group'>
                            <h2 className='FormValuTitile'>First Name<a className='ImportantSign'>*</a></h2>
                            <input type="text" placeholder='First Name' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <h2 className='FormValuTitile'>Last Name</h2>
                            <input type="text" placeholder='Last Name' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <h2 className='FormValuTitile'>Email Address<a className='ImportantSign'>*</a></h2>
                            <input type="email" placeholder='Email Address' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <h2 className='FormValuTitile'>Call NUmber<a className='ImportantSign'>*</a></h2>
                            <input type="phone" placeholder='Call Number' className='form-control' />
                        </div>
                        <div className='btncl'>
                          <button className='btn btn-secondary btnC'>Subscribe</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
      </Fragment>
    )
  }
}

export default Registration
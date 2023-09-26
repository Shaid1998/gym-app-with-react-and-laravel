import React, { Component, Fragment } from 'react'
import { Form } from 'react-bootstrap'
import Brand from '../../Assets/Image/Brand.jpg'
import RestClient from '../../BaseUrl/RestClient'
import AppUrl from '../../BaseUrl/BaseUrl'

class Registration extends Component {
  constructor(props){
    super(props);

    this.state = {
        fname : '',
        lname : '',
        email : '',
        phone : '',
        err_list :[]
    }
  }

  sendContact(){

      let fname = document.getElementById("fname").value;
      let lname = document.getElementById("lname").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;

      let jsonObject = {fname:fname,lname:lname, email:email,phone:phone}
        const res = RestClient.PostRequest(AppUrl.SubscribeData,JSON.stringify(jsonObject)).then(result=>{
            alert(result);
        }).catch(error=>{
            this.setState({
              error_list: res.data.validate_err,
            })
        })
  }
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
                            <input name='fname' type="text" id='fname' placeholder='First Name' className='form-control' />
                            <span className='text-danger'>{this.state.err_list.fname}</span>

                        </div>
                        <div className='form-group'>
                            <h2 className='FormValuTitile'>Last Name</h2>
                            <input name='lname' type="text" id='lname' placeholder='Last Name' className='form-control' />
                            <span className='text-danger'>{this.state.err_list.name}</span>

                        </div>
                        <div className='form-group'>
                            <h2 className='FormValuTitile'>Email Address<a className='ImportantSign'>*</a></h2>
                            <input name='email' type="email" id='email' placeholder='Email Address' className='form-control' />
                            <span className='text-danger'>{this.state.err_list.email}</span>

                        </div>
                        <div className='form-group'>
                            <h2 className='FormValuTitile'>Call NUmber<a className='ImportantSign'>*</a></h2>
                            <input name='phone' id='phone'type="phone" placeholder='Call Number' className='form-control' />
                            <span className='text-danger'>{this.state.err_list.phone}</span>

                        </div>
                        <div className='btncl'>
                          <button type='submit' onClick={this.sendContact} className='btn btn-secondary btnC'>Subscribe</button>
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
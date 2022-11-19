import React, { Component } from 'react'


export default class Footer extends Component {
  render() {
    return (
      <>
      <div className=' w-100  text-center footer  pt-5 flex-wrap'>
        <div className="row container-fluid d-flex justify-content-around">
            <div className="col-4 ">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive Clark, MO 65243</p>
            </div>
            <div className="col-4 ">
              <h3>AROUND THE WEB</h3>
              <i class="fa-brands fa-facebook icon" aria-hidden="true"></i>
              <i class="fa-brands fa-twitter icon" aria-hidden="true"></i>
              <i class="fa-brands fa-linkedin icon" aria-hidden="true"></i>
              <i class="fa-brands fa-dribbble icon" aria-hidden="true"></i>
            </div>
            <div className="col-4">
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
            </div>
        </div>
       
      </div>
      <div className='footer2 w-100 text-center '>
            <p>Copyright © Your Website 2021</p>
        </div>
      
    </>
    )
  }
}

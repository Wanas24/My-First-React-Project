import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="con mb-5">
        <div className="container">

  <div className="text-center">
  <h1 className='heading headingdark'>ABOUT</h1>
          <div className='dashdark'></div>
                <i class="fa fa-star" aria-hidden="true"></i>
           <div className='dashdark'></div>
  </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Phone Number
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
               Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button className="btn btn-success p-2 ">Send</button>
        </div>
      </div>
    );
  }
}

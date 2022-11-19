import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about pb-5 pt-5 ">
        <div className="container text-center ">
          <h1 className="heading">ABOUT</h1>
          <div className="dash"></div>
          <i class="fa fa-star" aria-hidden="true"></i>
          <div className="dash"></div>
          <div className="row justify-content-between mt-5 flex-wrap ">
            <div className="col-12 col-sm-6 ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-12 col-sm-6">
              <p>
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

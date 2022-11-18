import React, { Component } from 'react'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import {Outlet} from 'react-router-dom'



export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
}

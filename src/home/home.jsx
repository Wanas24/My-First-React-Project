import React, { Component } from 'react'
import profilepic from '../img/avataaars.svg'

export default class Home extends Component {
  render() {
    return (
      <div className='home w-100  bg-danger text-center'>
        <img src={profilepic} alt='' />
        <div className='hometext'>
        <h1 className='heading'>START REACT</h1>
        <div>
        <div className='dash'></div>
        <i class="fa fa-star" aria-hidden="true"></i>
        <div className='dash'></div>
        </div>
        
        <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    )
  }
}

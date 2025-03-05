import React from 'react'
import SlickSlider from './SlickSlider'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">
          <div className="t-head">
            <span className='tag'>Client Success Stories</span>
            <span className='title'>Trusted by Leading Businesses Worldwide</span>
            <span className='des'>What our clients say about their digital transformation journey</span>
          </div>
        </div>
        {/* slider */}
        <SlickSlider/>
      </div>
    </div>
  )
}

export default Testimonials
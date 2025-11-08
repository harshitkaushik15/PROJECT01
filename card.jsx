import React from 'react'
import { Bookmark } from 'lucide-react'

const CARD = (props) => {
  return (
    <div className='childdiv'>
      <div className='topcenter'>
        <div className='top'>
          <div className='imagediv'>
            <img
              className='image'
              src={props.brandLogo}
              alt={props.companyName}
              onError={(e) => e.target.src = "https://via.placeholder.com/60x60?text=Logo"}
            />
          </div>
          <button className='bookmarkbtn'>Save <Bookmark size={16} /></button>
        </div>

        <div className='center'>
          <h4>{props.companyName} <span className='spantext'> {props.datePosted}</span></h4>
          <h3>{props.post}</h3>

          <div className='twobutton'>
            <button>{props.tag1}</button>
            <button>{props.tag2}</button>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='footerdiv'>
          <h3>{props.payPerHour}</h3>
          <p>{props.location}</p>
        </div>

        <button className='footerbtn'>Apply Now</button>
      </div>
    </div>
  )
}

export default CARD

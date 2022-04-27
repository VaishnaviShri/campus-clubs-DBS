import React from 'react'
import Following_ch from '../components/Following_ch';
import Header_ch from '../components/Header_ch';
import Newpost_ch from '../components/newpost_ch';
import Postlist_ch from '../components/postlist_ch';


const chLanding = () => {
  return (
    <div>

      <div>
      <Header_ch />
      </div>
      
      <div>
        <Newpost_ch/>
        <Following_ch/>
      </div>

      <div>
        <Postlist_ch/>
      </div>
      
    </div>
  )
}

export default chLanding ;
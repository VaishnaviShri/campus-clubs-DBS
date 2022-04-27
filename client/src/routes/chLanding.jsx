import React from 'react'
import Header_ch from '../components/Header_ch';
import newpost_ch from '../components/newpost_ch';
import postlist_ch from '../components/postlist_ch';

const chLanding = () => {
  return (
    <div>
      <div>
      <Header_ch />
      </div>
      <div>
        <newpost_ch/>
      </div>
      <div>
        <postlist_ch/>
      </div>
    </div>
  )
}

export default chLanding ;
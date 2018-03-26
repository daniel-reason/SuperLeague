import React from 'react'

import NavBar from './NavBar'

const Header = ({props}) => (

  <div className="twelve columns">
    <div className="header">
      <div id='ihslLogo'>
      </div>
      <div id='ihslText'>
        <h1>Inline Hockey Super League</h1>
      </div>
    </div>
    <NavBar />
  </div>
)

export default Header

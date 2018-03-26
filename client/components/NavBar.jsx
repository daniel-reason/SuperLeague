import React from 'react'

const NavBar = ({props}) => (

  <div className="container">
    <div className="navigation">
      <div className="twelve columns">
          <div className="links">
            <a href="#" id="home-link">Home</a>
            <a href="#news" id="news-link">News</a>
            <a href="#events" id="events-link">Events</a>
            <a href="#teams" id="teams-link">Teams</a>
            <a href="#players" id="palyers-link">Players</a>
            <a href="#stats" id="stats-link">Stats</a>
            <a href="#signUp" id="signUp-link">Sign Up</a>
            <a href="#admin" id="admin-link">Admin</a>
          </div>
        </div>
      </div>
    </div>
  )

export default NavBar

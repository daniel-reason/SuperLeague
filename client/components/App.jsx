import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import News from './News'
import Players from './Players'
import SignUp from './SignUp'
import Stats from './Stats'
import Teams from './Teams'

function App (props) {
  return (
    <div className='app-container'>
      <Header />
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/news' component={News} />
          <Route path='/playes' component={Players} />
          <Route path='/signup' component={SignUp} />
          <Route path='/stats' component={Stats} />
          <Route path='/teams' component={Teams} />
        </div>
      </Router>
    </div>
  )
}

export default App

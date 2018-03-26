import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Admin from './admin/Admin'
import Events from './Events'
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
          <Route path='/admin' component={Admin} />
          <Route path='/events' component={Events} />
          <Route path='/news' component={News} />
          <Route path='/players' component={Players} />
          <Route path='/signup' component={SignUp} />
          <Route path='/stats' component={Stats} />
          <Route path='/teams' component={Teams} />
        </div>
      </Router>
    </div>
  )
}

export default App

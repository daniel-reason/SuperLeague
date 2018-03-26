import React from 'react'

const SignUp = ({props}) => (

  <div className="container">
    <div className="signUp">
      <div className="twelve columns">
        <div className="signUpContent">
          <form onSubmit={ confirmEmail } id='register'>
            <input type="text" placeholder="First Name" /><br />
            <input type="text" placeholder="Last Name" /><br />
            <input type="text" placeholder="Email" /><br />
            <input type="text" placeholder="Current Age" /><br />
            <select>
              <option value="" disabled selected hidden>Grade</option>
              <option value="Mens">Mens</option>
              <option value="Womens">Womens</option>
            </select><br />
            <select>
              <option value="" disabled selected hidden>Position</option>
              <option value="Forward">Forward</option>
              <option value="Defence">Defence</option>
              <option value="Forward/Defence">Forward/Defence</option>
              <option value="Goalie">Goalie</option>
            </select><br />
            <button type='submit' form='register' value='Submit'>Register</button>
            <input type="reset" />
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default SignUp

function confirmEmail(ev) {
  ev.preventDefault(ev)

 console.log(ev.target.elements[0].value)
 console.log(ev.target.elements[1].value)
 console.log(ev.target.elements[2].value)
 console.log(ev.target.elements[3].value)
 console.log(ev.target.elements[4].value)
 console.log(ev.target.elements[5].value)
}

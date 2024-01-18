import React from 'react'
import Temp from '../components/Temp'
import sign from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
        <Temp
        image={sign}
        title='Join the million learning to code with StudyNotion for free'
        desc1='Build skills for today, tomorrow, and beyond.'
        desc2='Education to future-proof your career.'
        type='signup'
        setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}

export default Signup
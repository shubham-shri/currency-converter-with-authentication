import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import CustomButton from '../../components/custom-button/custom-button.component'
import CustomFormInput from '../../components/custom-form-input/custom-form-input.component'
import getUserToken from '../../helper-functions/getToken.js'
import forgotPassword from '../../helper-functions/forgotPassword'
import './forgot-password.styles.scss'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const token = getUserToken()
  const history = useHistory()
  useEffect(() => {
    if (token) history.push('/')
  }, [history, token])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email)
    forgotPassword(email)
  }
  return (
    <div className="forgot-password">
      <div className="forgot-password__box">
        <h2 className="forgot-password__title">Forgot Password ?</h2>
        <span>Enter your email to get new password on your email</span>
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <CustomFormInput
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            required
          ></CustomFormInput>

          <CustomButton type="submit">Submit</CustomButton>
          <div className="sign-up-option">
            To go to Sign In <Link to={`/signin`}> Click Here</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword

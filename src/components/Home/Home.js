import axios from 'axios'
import { useState } from 'react'
import SignIn from '../SignIn/SignIn'
import WelcomePage from "../welcomePage/welcomePage"



let Home = () => {

  const [success, setSuccess] = useState(false)

  const accessToken = window.localStorage.getItem('token')
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })


  
  let logOut = async () => {
    let response = await authAxios.get("/auth/logout")
    setSuccess(true)
  }



  return (
    <>
      {
    success ? <SignIn/> : <WelcomePage logOut={logOut}/>
      }
    
    </>
  )
}


export default Home
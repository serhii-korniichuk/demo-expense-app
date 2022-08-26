import React from 'react'
import image from "./../../images/Decor.png"
import mainImage from "./../../images/Vector.png"
import style from "./welcomePage.module.css"

let WelcomePage = (props)=> {

  return (
    <div className={style.wrapper}>
        <div className={style.logo}>
          <span className={style.logoUp}>InCode</span><br />
          <span className={style.logoDown}>Finance</span>
        </div>
        <div className={style.mainContent}>
          <div className={style.mainHeading}>
            <h1 className={style.headingContent}>CONGRADULATIONS</h1>
            <img className={style.decor} src={image}></img>
          </div>
          <div className={style.secondHeadingWrap}>
            <p className={style.secondHeading}>Now you are on main page. Soon we will provide <br />
              you with detailed feedback on the result of our work</p>
          </div>
          <div className={style.buttonWrap}>
            <button className={style.button} onClick={()=>{props.logOut()}}>See You</button>
          </div>
          <div className={style.mainImage}>
            <img src={mainImage}></img>
          </div>
        </div >

      </div >
  )
}


export default WelcomePage
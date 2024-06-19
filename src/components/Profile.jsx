import React from 'react'
import { useState,useEffect } from 'react'
import './profile.css'

function Profile({name, age, picture, bio, onClick}) {


  return (
    <> 
    <div className="container" onClick={onClick}>
      
    <div className="card">
    <div className="img">
        <img src={picture} alt="Profile Picture"/>
        <div className="more_about">
        <h2>i am {name}</h2>
        <p>{age} years old</p>
        </div>
    </div>
    <div className="content">
        <p> Here's a short description to know me better😉; <br />{bio}</p>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Profile
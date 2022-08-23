import React from 'react'
import ProfilePicuture from '../assets/profile-picture.png'
import './ProfileHeader.css'
import EmailIcon from '../assets/email-icon.png'
import LinkedinIcon from '../assets/linkedin-icon.png'

function ProfileHeader() {
  return (
    <>
      <img src={ProfilePicuture} alt="profile picture" />
      <h1 className="profile-header--name">Laura Smith</h1>
      <h2 className="profile-header--title">Frontend Developer</h2>
      <p className="profile-header--website">laurasmith.website</p>
      <div className="profile-header--contact">
        <button className="contact--email-button">
          <img
            src={EmailIcon}
            className="button--email-icon"
            alt="email icon"
          />
          Email
        </button>
        <button className="contact--linkedin-button">
          <img
            src={LinkedinIcon}
            className="button--linkedin-icon"
            alt="LinkedIn icon"
          />
          LinkedIn
        </button>
      </div>
    </>
  )
}

export default ProfileHeader

import React from 'react'
import './ProfileInfo.css'

function ProfileInfo() {
  return (
    <div className="profile-info">
      <h3 className="profile-info--subtitle">About</h3>
      <p className="profile-info--text">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
      <h3 className="profile-info--subtitle">Interests</h3>
      <p className="profile-info--text">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  )
}

export default ProfileInfo

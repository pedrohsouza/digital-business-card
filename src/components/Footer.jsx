import React from 'react'
import './Footer.css'
import TwitterIcon from '../assets/twitter-icon.png'
import FacebookIcon from '../assets/facebook-icon.png'
import InstagramIcon from '../assets/instagram-icon.png'
import GithubIcon from '../assets/github-icon.png'

function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li>
            <a href="https://twitter.com" target="_blank">
              <img src={TwitterIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank">
              <img src={FacebookIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank">
              <img src={InstagramIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank">
              <img src={GithubIcon} alt="" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer

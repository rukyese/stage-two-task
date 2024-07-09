import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="newsletter">
            <h3>Newsletter</h3>
            <input className="email" type="email" placeholder="Enter e-mail" />
            <form className="newsletter-subscribe">
                <input className="subscribe" type="submit" value="Subscribe" />
                <img src="../Icons/envelope.svg" className="icon" />
            </form>
        </div>
        <div className="row footer-links">
            <div className="col-4">
                <h3>Customer Care</h3>
                <ul>
                    <li><a href="#">Exclusive Services</a></li>
                    <li><a href="#">Orders and Returns</a></li>
                    <li><a href="#">Size Guide</a></li>
                </ul>
            </div>
            <div className="col-4">
                <h3>General Information</h3>
                <ul>
                    <li><a href="#">Legal Area</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">Investor Relations</a></li>
                </ul>
            </div>
            <div className="social-media">
                <h4>Follow us on</h4>
                <ul>
                    <li><a href="#"><img src="../Icons/pinterest.svg" className="social-icon" /></a></li>
                    <li><a href="#"><img src="../Icons/tiktok.svg" className="social-icon" /></a></li>
                    <li><a href="#"><img src="../Icons/instagram.svg" className="social-icon" /></a></li>
                    <li><a href="#"><img src="../Icons/youtube.svg" className="social-icon" /></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer

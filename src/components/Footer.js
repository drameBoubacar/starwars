import React from 'react';

const Footer = () => {
  return(
    <div>
      <section className="footer">
      <h2>TM LucasFilm Ltd. All Rights Reserved.</h2>
      <div className="footer-list">
        <ul>
          <li>Terms of use</li>
          <li>Legal Notices</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          <li>Your California Privaci rights</li>
          <li>Star wars at disney store</li>
          <li>Privacy Policy</li>
        </ul>
        <div>
          <h3>follow star wars</h3>
          <ul className="list-icon-footer">
            <li><img src="/assets/icon_facebook.png"/></li>
            <li><img src="/assets/icon_twitter.png"/></li>
            <li><img src="/assets/icon_instagram.png"/></li>
          </ul>
        </div>
      </div>
      </section>
    </div>
  )
}
export default Footer;
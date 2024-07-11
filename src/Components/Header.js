import React, { useState, useEffect } from 'react';
import '../Styles/Header.css';

const Header = () => {
  const desktopImgUrl = './Images/header-img.png';
  const mobileImgUrl = './Images/mobile-header-img.png';

  const [imgUrl, setImgUrl] = useState(desktopImgUrl);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 550) {
        setImgUrl(mobileImgUrl);
      } else {
        setImgUrl(desktopImgUrl);
      }
    };

    // Set initial image URL based on window width
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopImgUrl, mobileImgUrl]);

  return (
    <header id="header">
      <div className="image-container">
        <img src={imgUrl} className="header-img" />
      </div>


      <div id="header-caption">
        <h1>Modern Touch</h1>
        <p>
          Minim ad dolore veniam nulla ex enim enim veniam ipsum quis ea elit ea. Consequat deserunt laborum laborum consectetur ut occaecat nulla consectetur nostrud. Deserunt elit do est est enim irure ad eiusmod quis ex duis officia qui deserunt.
        </p>
      </div>
    </header>
  );
};

export default Header;

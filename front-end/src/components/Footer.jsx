import React from "react";
import LogoFooter from "../media/abeille.png"

const Footer = () => {
  return (
    <div>
      <footer>
        <ul>
          <li>Nous contecter</li>
          <li>Mentions légales</li>
          <li>Parametre des cookies</li>
          <li>Navigation</li>
          <li>FaQ</li>
        </ul>
        <div id="icon4">
          <a href="http://www.twitter">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="http://www.youtube.com">
            <i class="fa fa-youtube"></i>
          </a>
          <a href="http://www.instagram.fr">
            <i class="fa fa-instagram"></i>{" "}
          </a>
 <div className='logo-footer'>
            <img src={LogoFooter}
            width={100}
            height={100}
             alt="logo" />
        </div>
    );

        </div>
      </footer>
    </div>
  );
};

export default Footer;

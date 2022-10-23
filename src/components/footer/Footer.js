
import React from 'react';
import'./FooterStyles.css'
import {FaAlignCenter, FaAlignRight, FaTwitter} from 'react-icons/fa'
import {FaDesktop} from 'react-icons/fa'
  
const Footer = () => (
  <footer className="footer">
   {/**  <p className="text">The NYU Clinical AI Workshop</p> */}
    <ul className="social">
                    <a>NYU CAI Lab</a>
                    <a href="https://twitter.com/NYUClinicalAI" >
                    <FaTwitter className='icon' />
                    </a>
                    <a href="https://clinicalailab.com">
                    <FaDesktop className='icon' />
                    </a>
                    </ul>



return (
  <footer class="footer">
  © 2023 by the Clinical AI Lab

 

  </footer>
)
  
  </footer>
);
  
export default Footer;






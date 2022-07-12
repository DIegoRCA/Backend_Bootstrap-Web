import React from 'react';
import '../../styles/layout/Footer.css';

const Footer = (props)=>{
    return(
    <footer >
        <div className="footer">
            <p> Tel: <span>(02) 9550 1321</span></p>
            <p>E-mail: <a target="blank" href="mailto:info@alchemyco.com.au?Subject=Please%20contact%20me">info@alchemyco.com.au</a></p>
        </div>
    </footer>   
        
   
    );
}

export default Footer;
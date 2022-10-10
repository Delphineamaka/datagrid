import React from "react";
import BottomNav from './BottomNav';
 
function Footer() {

   const date = new Date()
   const day = date.getDay();
   const month = date.getMonth();
   const year = date.getFullYear();
  const currentDate = `${day}, ${month}, ${year}`
 
  

    return (
        <div>
            <footer className="footer">
              <p>Made With Adobe XD</p>
              
                <p className="footer__p"> Link Updated {currentDate}</p>
      
            </footer>
            <BottomNav/>
        </div>
    );
}

export default Footer;
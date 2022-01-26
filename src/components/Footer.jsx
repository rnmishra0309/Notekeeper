import React from "react";

function Footer() {
  var currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy;Copyright {currentYear}</p>
    </footer>
  );
}

export default Footer;

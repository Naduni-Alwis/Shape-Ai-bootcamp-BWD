import React from "react";
function Footer() {
  var currYear = new Date().getFullYear;
  return (
    <footer>
      <p> Copy write @ 2021 {currYear}</p>
    </footer>
  );
}
export default Footer;

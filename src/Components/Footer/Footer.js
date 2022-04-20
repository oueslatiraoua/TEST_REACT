import React from "react";
import "../Main/Main.css";
const Footer = () => {
  return (
    <footer>
      <hr
        style={{
          width: "1916px",
          height: "1px",
          position: "absolute",
          marginTop: "-55px",
          background: "linear-gradient(90deg, #E3FFE6 0%, #E5E1D6 100%)",
          opacity: "0.3",
        }}
      />
      <div className="containerFooter">
        <span className="columns">Awesome AGENCY</span>
        <div className="columns">
          <h4>Information</h4>
          About Us <br />
          Origins <br />
          FAQs <br />
          Contact <br />
          Legal <br />
        </div>
        <div className="columns">
          <h4>Contact us</h4>
          contact@awesomeagency.com <br />
          +216 000000 <br />
          The world,of Awesomeness <br />
        </div>
        <div className="columns">Follow us on social media</div>
      </div>
    </footer>
  );
};

export default Footer;

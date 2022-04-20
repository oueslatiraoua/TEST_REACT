import React from "react";
import IMAGE1 from "../Main/IMAGE1.png";
import IMAGE2 from "../Main/IMAGE2.png";
import IMAGE3 from "../Main/IMAGE3.png";
import IMAGE4 from "../Main/IMAGE4.png";
import "../Main/Main.css";
function AboutUs() {
  return (
    <section>
      {" "}
      <div className="form">
        Our teams are continuously developing innovative strategies, building
        new technologies, and conducting ongoing research.
      </div>
      <div
        className="form"
        style={{
          marginTop: "2410px",
          zIndex: "1",
          width: "165px",
          height: "36px",
          left: "24px",

          fontFamily: "Aeonik",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "150%",
        }}
      >
        Administration
      </div>
      <img src={IMAGE1} className="image1"></img>
      <div
        className="form"
        style={{
          marginTop: "2410px",
          zIndex: "1",
          width: "165px",
          height: "36px",
          left: "397px",

          fontFamily: "Aeonik",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "150%",
        }}
      >
        Design
      </div>
      <img src={IMAGE2} className="image2"></img>
      <div
        className="form"
        style={{
          marginTop: "2410px",
          zIndex: "1",
          width: "165px",
          height: "36px",
          left: "767px",

          fontFamily: "Aeonik",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "150%",
        }}
      >
        Development
      </div>
      <img src={IMAGE3} className="image3"></img>
      <div
        className="form"
        style={{
          marginTop: "2410px",
          zIndex: "1",
          width: "165px",
          height: "36px",
          left: "1571px",

          fontFamily: "Aeonik",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "150%",
        }}
      >
        AI
      </div>
      <img src={IMAGE4} className="image4"></img>
      <div className="center">
        You’ve got questions, we’ve got answers... Let’s Chat!
      </div>
      <div>
        <button type="text" className="NewButton">
          Contact the Team
        </button>
      </div>
    </section>
  );
}

export default AboutUs;

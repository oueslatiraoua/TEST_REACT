import React from "react";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IMAGE6 from "./Rectangle.png";

import "./Main.css";

const Main = () => (
  <>
    <nav
      style={{
        height: "8.98px",
        marginLeft: "100px",
        marginTop: "29.15px",
        color: "#FFFFFF",
        textAlign: "start",
      }}
    >
      Awesome AGENCY
    </nav>
    <hr
      style={{
        width: "1916px",
        height: "1px",

        marginTop: "34.35px",

        background: "linear-gradient(90deg, #E3FFE6 0%, #E5E1D6 100%)",
        opacity: "0.3",
      }}
    />
    <div className="content-wrapper">
      <div className="content">
        <article>
          Closen the technology of the future to help you{" "}
          <span
            style={{
              width: "243px",
              height: "77px",
              left: "5px",
              top: "6px",

              fontFamily: "Aeonik",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "64px",
              lineHeight: "77px",
              /* identical to box height */

              color: "#C8F4A6",
            }}
          >
            Innovate
          </span>
        </article>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
          arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus quam a
          sollicitudin convallis purus. Sed sed quam risus laoreet viverra id ut
          amet feugiat. Sed nec id id sed ut nulla aliquet neque. Sed est
          malesuada lobortis aliquam dolor eget donec
        </h4>

        <img
          style={{ marginTop: "200px", height: "600px" }}
          src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        ></img>
        <h1></h1>
        <div className="form-wrapper">
          <button className="main-sign-up">Get started</button>
        </div>
      </div>
      <div>
        <h2
          style={{
            position: "absolute",
            width: "133px",
            height: "23px",
            left: "100px",
            top: "855px",

            fontFamily: "Aeonik",
            fontStyle: "normal",
            fontWeight: "500px",
            fontSize: "15px",
            lineHeight: "150%",
            /* identical to box height, or 22px */

            textDecorationLine: "underline",

            color: "#636D5B",
          }}
        >
          Some of our clients <br />
        </h2>
        <div
          style={{
            position: "absolute",
            left: "110px",
            top: "890px",
            fontFamily: "Aeonik",
            fontWeight: "bold",
            fontSize: "23px",

            /* identical to box height, or 22px */

            color: "#636D5B",
          }}
        >
          GOOGLE
        </div>

        <div
          style={{
            position: "absolute",
            left: "230px",
            top: "890px",
            fontFamily: "Aeonik",
            fontWeight: "bold",
            fontSize: "23px",

            /* identical to box height, or 22px */

            color: "#636D5B",
          }}
        >
          Microsoft
        </div>
      </div>
      <img src={IMAGE6} className="image6" />
    </div>
    <hr
      style={{
        width: "1916px",
        height: "1px",
        marginBottom: "100px",
        marginTop: "-600px",
        position: "absolute",
        background: "linear-gradient(90deg, #E3FFE6 0%, #E5E1D6 100%)",
        opacity: "0.3",
        marginLeft: "100px",
      }}
    />
  </>
);

export default Main;

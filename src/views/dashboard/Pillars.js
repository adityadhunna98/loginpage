import React from "react";
import Automation from "../assests/Automation.png";
import Hierachy from "../assests/Hierarchy.png";
import Attract from "../assests/Attract.png";
import People from "../assests/People.png";
import Process from "../assests/Process.png";

const Pillars = (props) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(179.93deg, #003087 69.97%, rgba(14, 99, 249, 0) 148.31%)",
        borderRadius: "8px 8px 0px 0px",
        width: "14vw",
        height: "15vh",
      }}
    >
      <div style={{display:'flex' , alignItems:'center' , justifyContent:'space-around',   marginTop: "-1.3rem",}}>
        <img
          src={
            props.name === "Influence"
              ? Attract
              : props.name === "Organization"
              ? Hierachy
              : props.name === "People"
              ? People
              : props.name === "Process"
              ? Process
              : props.name === "Technology"
              ? Automation
              : Attract
          }
        />
        <h4
          style={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "900",
            fontSize: "30px",
            textAlign: "center",
            textTransform: "uppercase",
            color: "#FFFFFF",
          }}
        >
          {props.value}
        </h4>
      </div>
      <h3
        style={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "900",
          fontSize: "20px",
          marginTop: "-1rem",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#FFFFFF",
        }}
      >
        {props.name}
      </h3>
    </div>
  );
};

export default Pillars;
